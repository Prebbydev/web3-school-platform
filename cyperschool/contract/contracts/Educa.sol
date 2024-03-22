// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/access/AccessControl.sol";


// contract Educational is AccessControl {
//     address public owner;

//     uint256 totalCourses;
//     uint256 totalStudents;

//     bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE"); 
//     bytes32 public constant STUDENT_ROLE = keccak256("STUDENT_ROLE"); 


//     mapping (address => uint256) public studentRewards;
//     mapping (address => bool) public enrolledStudents;

//     event CreateCourse(uint256 indexed courseId, string title, string courseURL, string submitLink, uint256 credit, uint256 reward, bool);
//     event CourseEnrolled(address student, uint256 acourseId, uint256 rewardEarned);
//     event CourseCompleted(address student, uint256 courseId, uint256 courseReward);
//     event AssignmentSubmitted(address indexed student, uint256 indexed courseId, string assignmentURL);

//     enum EnrollStatus {
//         NOTENROLL,
//         ENROLL,
//         COMPLETED
//     }
//     constructor () {
//         _setRoleAdmin(STUDENT_ROLE, DEFAULT_ADMIN_ROLE); 
//         _grantRole(ADMIN_ROLE, msg.sender);
//     }

//     struct Course {
//         string title;
//         string courseURL;
//         string SubmitLink;
//         uint256 rewards;
//         uint256 credits;
//         bool isCompleted;
//         EnrollStatus enrollSatus;
//         mapping(address => string) studentSubmissions;
//         // blocked

//     }
//     struct Submission {
//     address studentAddress;
//     string submissionLink;
// }


//     modifier onlyAdmin () {
//         require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "only admin have access");
//         _;
//     }
//     mapping (uint256 => Course) public courses;
//     mapping(uint256 => address[]) public courseEnrollments;


//     function createCourse(string memory _title, string memory _courseURL, uint256 _credits, uint256 _reward) external {
//         string memory submit = '';
//         Course storage newCourse = courses[totalCourses];
//         newCourse.courseURL = _courseURL;
//         newCourse.title = _title;
//         newCourse.credits = _credits;
//         newCourse.rewards = _reward;
//         totalCourses++;

//         emit CreateCourse(totalCourses, _title, _courseURL, submit, _credits, _reward, false);

//     }

//     function getCoursesDetails(uint256 _index) public view returns(string memory, string memory,
//     string memory, uint256, uint256, bool) {
//         Course storage course = courses[_index];
//         return (
//             course.title,
//             course.courseURL,
//             course.SubmitLink,
//             course.rewards,
//             course.credits,
//             course.isCompleted
//         );
//     }

    

//     function enrollCourse(uint256 _courseId) external {
//     require(!enrolledStudents[msg.sender], "Student is already enrolled in the course");
//     require(_courseId <= totalCourses, "Invalid Course ID");
//     enrolledStudents[msg.sender] = true;
//     totalStudents++;

//     uint256 createToEarn = courses[_courseId].credits;
//     studentRewards[msg.sender] += createToEarn;
//     courseEnrollments[_courseId].push(msg.sender);

//     emit CourseEnrolled(msg.sender, _courseId, createToEarn);
// }


//     function getEnrolledStudentsForCourse(uint256 _courseId) public view returns (address[] memory) {
//     return courseEnrollments[_courseId];
// }

    

//     function submitAssignment(uint256 _courseId, string memory _assignmentURL) external {
//         require(enrolledStudents[msg.sender], "Student is not enrolled in this course");
//         require(_courseId <= totalCourses && _courseId > 0, "Invalid course ID");
//         require(!courses[_courseId].isCompleted, "Course already completed");

//         emit AssignmentSubmitted(msg.sender, _courseId, _assignmentURL);
//     }

//     function submitAssignments(uint256 _courseId, string memory _assignmentURL) external {
//     require(enrolledStudents[msg.sender], "Student is not enrolled in this course");
//     require(_courseId <= totalCourses, "Invalid course ID");
//     require(!courses[_courseId].isCompleted, "Course already completed");

//     // Store the submission link for the student
//     courses[_courseId].studentSubmissions[msg.sender] = _assignmentURL;

//     emit AssignmentSubmitted(msg.sender, _courseId, _assignmentURL);
// }


//     function completedCourse(uint256 _courseId) external {
//         require(enrolledStudents[msg.sender], "Student is not enrolled in this course");
//         require(_courseId <= totalCourses, "Invalid course ID");
//         require(!courses[_courseId].isCompleted, "Course already completed");

//         uint256 rewardEarned = courses[_courseId].rewards;
//         studentRewards[msg.sender] += rewardEarned;
//         courses[_courseId].isCompleted = true;

//         emit CourseCompleted(msg.sender, _courseId, rewardEarned);

//     }

//     function getStudentCredits() external view returns (uint256) {
//         return studentRewards[msg.sender];
//     }

   


//     // function getCourseDetails(uint256 _courseId) external view returns (Course memory) {
//     //     require(_courseId <= totalCourses && _courseId > 0, "Invalid course ID");
//     //     return courses[_courseId];
//     // }

//   function getCourseSubmission(uint256 _courseId) external view returns (string[] memory) {
//     require(_courseId <= totalCourses, "Invalid course ID");
//     Course storage course = courses[_courseId];

//     // Get all enrolled students for the course
//     address[] memory enrolledStudentsForCourse = courseEnrollments[_courseId];

//     // Initialize an array to hold the submission links
//     string[] memory submissions = new string[](enrolledStudentsForCourse.length);

//     // Iterate over all enrolled students and retrieve their submissions
//     for (uint256 i = 0; i < enrolledStudentsForCourse.length; i++) {
//         // Retrieve the submission link for the current student
//         string memory submissionLink = course.studentSubmissions[enrolledStudentsForCourse[i]];

//         // Check if the submission link is empty (i.e., the student has not submitted an assignment)
//         if (bytes(submissionLink).length == 0) {
//             // Handle the case where the student has not submitted an assignment
//             // For example, you might want to set the submission link to a default value or skip this student
//             submissions[i] = "No submission";
//         } else {
//             // If the student has submitted an assignment, store the submission link
//             submissions[i] = submissionLink;
//         }
//     }

//     return submissions;
// }

//     function getCourseSubmissions(uint256 _courseId) external view returns (Submission[] memory) {
//     require(_courseId <= totalCourses, "Invalid course ID");
//     Course storage course = courses[_courseId];

//     // Assuming a maximum of 100 submissions for simplicity
//     Submission[] memory submissions = new Submission[](100);

//     // Get all enrolled students for the course
//     address[] memory enrolledStudentsForCourse = courseEnrollments[_courseId];

//     // Iterate over all enrolled students and retrieve their submissions
//     for (uint256 i = 0; i < enrolledStudentsForCourse.length; i++) {
//         // Retrieve the submission link for the current student
//         string memory submissionLink = course.studentSubmissions[enrolledStudentsForCourse[i]];

//         // Check if the submission link is empty (i.e., the student has not submitted an assignment)
//         if (bytes(submissionLink).length == 0) {
//             // Handle the case where the student has not submitted an assignment
//             // For example, you might want to set the submission link to a default value or skip this student
//             submissions[i] = Submission(enrolledStudentsForCourse[i], "No submission");
//         } else {
//             // If the student has submitted an assignment, store the submission link
//             submissions[i] = Submission(enrolledStudentsForCourse[i], submissionLink);
//         }
//     }

//     return submissions;
// }



// }