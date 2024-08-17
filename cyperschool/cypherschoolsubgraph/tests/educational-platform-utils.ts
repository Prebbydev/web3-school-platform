import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AssignmentSubmitted,
  CourseCompleted,
  CourseEnrolled,
  CreateCourse,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/EducationalPlatform/EducationalPlatform"

export function createAssignmentSubmittedEvent(
  student: Address,
  courseId: BigInt,
  assignmentURL: string
): AssignmentSubmitted {
  let assignmentSubmittedEvent = changetype<AssignmentSubmitted>(newMockEvent())

  assignmentSubmittedEvent.parameters = new Array()

  assignmentSubmittedEvent.parameters.push(
    new ethereum.EventParam("student", ethereum.Value.fromAddress(student))
  )
  assignmentSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "courseId",
      ethereum.Value.fromUnsignedBigInt(courseId)
    )
  )
  assignmentSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "assignmentURL",
      ethereum.Value.fromString(assignmentURL)
    )
  )

  return assignmentSubmittedEvent
}

export function createCourseCompletedEvent(
  student: Address,
  courseId: BigInt,
  courseReward: BigInt
): CourseCompleted {
  let courseCompletedEvent = changetype<CourseCompleted>(newMockEvent())

  courseCompletedEvent.parameters = new Array()

  courseCompletedEvent.parameters.push(
    new ethereum.EventParam("student", ethereum.Value.fromAddress(student))
  )
  courseCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "courseId",
      ethereum.Value.fromUnsignedBigInt(courseId)
    )
  )
  courseCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "courseReward",
      ethereum.Value.fromUnsignedBigInt(courseReward)
    )
  )

  return courseCompletedEvent
}

export function createCourseEnrolledEvent(
  student: Address,
  courseId: BigInt,
  rewardEarned: BigInt
): CourseEnrolled {
  let courseEnrolledEvent = changetype<CourseEnrolled>(newMockEvent())

  courseEnrolledEvent.parameters = new Array()

  courseEnrolledEvent.parameters.push(
    new ethereum.EventParam("student", ethereum.Value.fromAddress(student))
  )
  courseEnrolledEvent.parameters.push(
    new ethereum.EventParam(
      "courseId",
      ethereum.Value.fromUnsignedBigInt(courseId)
    )
  )
  courseEnrolledEvent.parameters.push(
    new ethereum.EventParam(
      "rewardEarned",
      ethereum.Value.fromUnsignedBigInt(rewardEarned)
    )
  )

  return courseEnrolledEvent
}

export function createCreateCourseEvent(
  courseId: BigInt,
  title: string,
  courseURL: string,
  submitLink: string,
  credit: BigInt,
  reward: BigInt,
  param6: boolean
): CreateCourse {
  let createCourseEvent = changetype<CreateCourse>(newMockEvent())

  createCourseEvent.parameters = new Array()

  createCourseEvent.parameters.push(
    new ethereum.EventParam(
      "courseId",
      ethereum.Value.fromUnsignedBigInt(courseId)
    )
  )
  createCourseEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  createCourseEvent.parameters.push(
    new ethereum.EventParam("courseURL", ethereum.Value.fromString(courseURL))
  )
  createCourseEvent.parameters.push(
    new ethereum.EventParam("submitLink", ethereum.Value.fromString(submitLink))
  )
  createCourseEvent.parameters.push(
    new ethereum.EventParam("credit", ethereum.Value.fromUnsignedBigInt(credit))
  )
  createCourseEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  createCourseEvent.parameters.push(
    new ethereum.EventParam("param6", ethereum.Value.fromBoolean(param6))
  )

  return createCourseEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}
