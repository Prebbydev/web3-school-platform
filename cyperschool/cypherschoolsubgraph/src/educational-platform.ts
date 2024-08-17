import {
  AssignmentSubmitted as AssignmentSubmittedEvent,
  CourseCompleted as CourseCompletedEvent,
  CourseEnrolled as CourseEnrolledEvent,
  CreateCourse as CreateCourseEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent
} from "../generated/EducationalPlatform/EducationalPlatform"
import {
  AssignmentSubmitted,
  CourseCompleted,
  CourseEnrolled,
  CreateCourse,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/schema"

export function handleAssignmentSubmitted(
  event: AssignmentSubmittedEvent
): void {
  let entity = new AssignmentSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.student = event.params.student
  entity.courseId = event.params.courseId
  entity.assignmentURL = event.params.assignmentURL

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCourseCompleted(event: CourseCompletedEvent): void {
  let entity = new CourseCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.student = event.params.student
  entity.courseId = event.params.courseId
  entity.courseReward = event.params.courseReward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCourseEnrolled(event: CourseEnrolledEvent): void {
  let entity = new CourseEnrolled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.student = event.params.student
  entity.courseId = event.params.courseId
  entity.rewardEarned = event.params.rewardEarned

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateCourse(event: CreateCourseEvent): void {
  let entity = new CreateCourse(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.courseId = event.params.courseId
  entity.title = event.params.title
  entity.courseURL = event.params.courseURL
  entity.submitLink = event.params.submitLink
  entity.credit = event.params.credit
  entity.reward = event.params.reward
  entity.param6 = event.params.param6

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
