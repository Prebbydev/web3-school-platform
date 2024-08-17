import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { AssignmentSubmitted } from "../generated/schema"
import { AssignmentSubmitted as AssignmentSubmittedEvent } from "../generated/EducationalPlatform/EducationalPlatform"
import { handleAssignmentSubmitted } from "../src/educational-platform"
import { createAssignmentSubmittedEvent } from "./educational-platform-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let student = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let courseId = BigInt.fromI32(234)
    let assignmentURL = "Example string value"
    let newAssignmentSubmittedEvent = createAssignmentSubmittedEvent(
      student,
      courseId,
      assignmentURL
    )
    handleAssignmentSubmitted(newAssignmentSubmittedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AssignmentSubmitted created and stored", () => {
    assert.entityCount("AssignmentSubmitted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AssignmentSubmitted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "student",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AssignmentSubmitted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "courseId",
      "234"
    )
    assert.fieldEquals(
      "AssignmentSubmitted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assignmentURL",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
