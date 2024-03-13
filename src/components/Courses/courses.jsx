import React, { useState } from 'react';

const Courses = () => {
  const [courses] = useState([
    {
      id: 1,
      title: 'Course 1',
      description: 'Description for Course 1',
      videos: [
        { id: 1, title: 'Video 1.1' },
        { id: 2, title: 'Video 1.2' },
        { id: 3, title: 'Video 1.3' }
      ]
    },
    {
      id: 2,
      title: 'Course 2',
      description: 'Description for Course 2',
      videos: [
        { id: 1, title: 'Video 2.1' },
        { id: 2, title: 'Video 2.2' },
        { id: 3, title: 'Video 2.3' }
      ]
    }
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);

  const togglePlaylist = (course) => {
    setSelectedCourse(selectedCourse === course ? null : course);
  };

  return (
    <div className="courses">
      {courses.map(course => (
        <div key={course.id}>
          <h3 onClick={() => togglePlaylist(course)}>{course.title}</h3>
          {selectedCourse === course && (
            <div>
              <p>{course.description}</p>
              <h4>Video Playlist</h4>
              <ol>
                {course.videos.map(video => (
                  <li key={video.id}>{video.title}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Courses;
