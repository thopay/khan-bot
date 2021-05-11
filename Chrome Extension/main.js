function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
var present = false
var checkExist = setInterval(function() {
    if (document.getElementsByClassName('_1gz49uis').length > 0 && present == false) {
        let div = document.createElement('div')
        div.innerHTML = '<button id="injectLmao" type="button" role="button" tabindex="0" class="_1gz49uis" style="margin-left:20px !important; background-color: rgba(19, 1, 1, 0.3) !important; cursor:pointer !important;"><span class="_1alfwn7n">Wait</span></button>'
        while (div.children.length > 0) {
            document.getElementsByClassName('_3tyi1gn')[0].appendChild(div.children[0])
            present = true
        }
        fetchExerciseId();
        var checkExit = setInterval(function() {
        if (document.getElementsByClassName('_1gz49uis').length == 0) {
            present = false
            clearInterval(checkExit);
        }
    }, 100);
    }
}, 100);

var checkExist = setInterval(function() {
    if (document.querySelector("[data-test-id='exercise-check-answer']") != null && present == false) {
        let div = document.createElement('div')
        div.innerHTML = '<button id="injectLmao" type="button" style="margin-left:20px !important; background-color: rgba(19, 1, 1, 0.3) !important; color: #ffffff !important; cursor:pointer !important;" role="button" tabindex="-1"  class="_tu2medr"><span class="_1alfwn7n">Wait</span></button>'
        while (div.children.length > 0) {
            document.getElementsByClassName('_64iw7hi')[0].appendChild(div.children[0])
            present = true
        }
        fetchExerciseId();
        var checkExit = setInterval(function() {
        if (document.querySelector("[data-test-id='exercise-check-answer']") == null) {
            present = false
            clearInterval(checkExit);
        }
    }, 100);
    }
}, 100);

function manualAssessmentSolve(positionKey, topicId) {
    fetch("https://www.khanacademy.org/api/internal/graphql/getOrCreateExerciseTask", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-ka-fkey": getCookie('fkey')
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{\"operationName\":\"getOrCreateExerciseTask\",\"variables\":{\"input\":{\"canReserveItems\":true,\"positionKey\":\"${positionKey}\",\"taskType\":\"topic_quiz\",\"topicId\":\"${topicId}\"}},\"query\":\"mutation getOrCreateExerciseTask($input: GetOrCreateExerciseTaskInput!) {\\n  getOrCreateExerciseTask(input: $input) {\\n    result {\\n      error {\\n        code\\n        debugMessage\\n        __typename\\n      }\\n      actionResults {\\n        notificationsAdded {\\n          avatarParts\\n          badges\\n          continueUrl\\n          readable\\n          toast\\n          urgent\\n          __typename\\n        }\\n        __typename\\n      }\\n      userTask {\\n        cards {\\n          done\\n          cardType\\n          ... on ProblemCard {\\n            exerciseName\\n            problemType\\n            __typename\\n          }\\n          __typename\\n        }\\n        includeSkipButton\\n        task {\\n          id\\n          key\\n          pointBounty\\n          pointsEarned\\n          taskType\\n          completionCriteria {\\n            name\\n            __typename\\n          }\\n          ... on MasteryChallengeTask {\\n            expirationTime\\n            promotionCriteria {\\n              name\\n              value\\n              __typename\\n            }\\n            reservedItems\\n            reservedItemsCompleted\\n            taskAttemptHistory {\\n              correct\\n              timeDone\\n              seenHint\\n              itemId\\n              __typename\\n            }\\n            __typename\\n          }\\n          ... on SubjectChallengeTask {\\n            promotionCriteria {\\n              name\\n              value\\n              __typename\\n            }\\n            reservedItems\\n            reservedItemsCompleted\\n            taskAttemptHistory {\\n              correct\\n              timeDone\\n              seenHint\\n              itemId\\n              __typename\\n            }\\n            __typename\\n          }\\n          ... on TopicQuizTask {\\n            contentKey\\n            promotionCriteria {\\n              name\\n              value\\n              __typename\\n            }\\n            reservedItems\\n            reservedItemsCompleted\\n            taskAttemptHistory {\\n              correct\\n              timeDone\\n              seenHint\\n              itemId\\n              __typename\\n            }\\n            __typename\\n          }\\n          ... on TopicUnitTestTask {\\n            contentKey\\n            promotionCriteria {\\n              name\\n              value\\n              __typename\\n            }\\n            reservedItems\\n            reservedItemsCompleted\\n            taskAttemptHistory {\\n              correct\\n              timeDone\\n              seenHint\\n              itemId\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        userExercises {\\n          ...exerciseTaskUserExerciseFields\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment exerciseTaskUserExerciseFields on UserExercise {\\n  exerciseModel: exercise {\\n    id\\n    assessmentItemCount: numAssessmentItems\\n    displayName\\n    isQuiz\\n    isSkillCheck\\n    name\\n    nodeSlug\\n    progressKey\\n    translatedDisplayName\\n    relatedContent {\\n      id\\n      contentKind\\n      kind\\n      thumbnailUrl\\n      translatedTitle\\n      topicPaths {\\n        path {\\n          id\\n          kind\\n          slug\\n          __typename\\n        }\\n        __typename\\n      }\\n      ... on Article {\\n        kaUrl\\n        nodeSlug\\n        relativeUrl\\n        slug\\n        __typename\\n      }\\n      ... on Video {\\n        duration\\n        imageUrl\\n        kaUrl\\n        nodeSlug\\n        relativeUrl\\n        slug\\n        translatedYoutubeId\\n        __typename\\n      }\\n      __typename\\n    }\\n    relatedVideos {\\n      conceptTagsInfo: conceptTags {\\n        id\\n        displayName\\n        slug\\n        __typename\\n      }\\n      contentKind\\n      duration\\n      id\\n      imageUrl\\n      kaUrl\\n      kind\\n      nodeSlug\\n      progressKey\\n      relativeUrl\\n      slug\\n      thumbnailUrl\\n      translatedDescription\\n      translatedTitle\\n      translatedYoutubeId\\n      __typename\\n    }\\n    problemTypes {\\n      items {\\n        id\\n        live\\n        sha\\n        __typename\\n      }\\n      name\\n      relatedVideos\\n      __typename\\n    }\\n    translatedProblemTypes {\\n      items {\\n        id\\n        live\\n        sha\\n        __typename\\n      }\\n      name\\n      relatedVideos\\n      __typename\\n    }\\n    __typename\\n  }\\n  exercise: exerciseName\\n  fpmMasteryLevel\\n  lastAttemptNumber\\n  lastCountHints\\n  lastDone\\n  lastMasteryUpdate\\n  longestStreak\\n  maximumExerciseProgressDt: maximumExerciseProgressDate\\n  streak\\n  totalCorrect\\n  totalDone\\n  __typename\\n}\\n\"}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
    }).then(e => e.json()).then(resp => {
        var exercises = resp.data.getOrCreateExerciseTask.result.userTask.userExercises
        for (var j = 0; j < exercises.length; j++) {
            var exerciseId = exercises[j].exerciseModel.id
            var pos = exercises[j].totalDone + 1
            fetch("https://www.khanacademy.org/api/internal/graphql/getAssessmentItem", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-ka-fkey": getCookie('fkey')
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `{\"operationName\":\"getAssessmentItem\",\"variables\":{\"input\":{\"exerciseId\":\"${exerciseId}\",\"problemNumber\":${pos}}},\"query\":\"query getAssessmentItem($input: AssessmentItemInput!) {\\n  assessmentItem(input: $input) {\\n    item {\\n      id\\n      sha\\n      problemType\\n      itemData\\n      __typename\\n    }\\n    error {\\n      code\\n      debugMessage\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
            }).then(e => e.json()).then(resp => {
                var itemSha = resp.data.assessmentItem.item.sha
                var itemId = resp.data.assessmentItem.item.id
                fetch("https://www.khanacademy.org/api/internal/_mt/graphql/attemptProblem", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json",
                    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-ka-fkey": getCookie('fkey')
                },
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": `{\"operationName\":\"attemptProblem\",\"variables\":{\"input\":{\"problemNumber\":${pos},\"assessmentItemSha\":\"${itemSha}\",\"assessmentItemId\":\"${itemId}\",\"completed\":true,\"exerciseId\":\"${exerciseId}\",\"topicId\":\"${topicId}\",\"problemType\":\"2. Total distance\",\"countHints\":0,\"timeTaken\":2,\"attemptNumber\":1,\"attemptContent\":\"[[{\\\"countChoices\\\":false,\\\"choicesSelected\\\":[false,false,false,true],\\\"numCorrect\\\":1,\\\"noneOfTheAboveIndex\\\":null,\\\"noneOfTheAboveSelected\\\":false}],[]]\",\"attemptState\":\"{\\\"radio 1\\\":{\\\"numCorrect\\\":1,\\\"hasNoneOfTheAbove\\\":false,\\\"multipleSelect\\\":false,\\\"deselectEnabled\\\":false,\\\"choices\\\":[{\\\"isNoneOfTheAbove\\\":false,\\\"content\\\":\\\"$3+\\\\\\\\displaystyle\\\\\\\\int_{4}^{10}v(t)\\\\\\\\,dt$\\\",\\\"correct\\\":false,\\\"clue\\\":\\\"This expression gives us the position of the particle relative to the starting point at time $t=10$.\\\",\\\"originalIndex\\\":2},{\\\"isNoneOfTheAbove\\\":false,\\\"content\\\":\\\"$\\\\\\\\displaystyle\\\\\\\\int_{4}^{10}|v(t)|\\\\\\\\,dt$\\\",\\\"correct\\\":true,\\\"originalIndex\\\":3},{\\\"content\\\":\\\"$6|v(4)|$\\\",\\\"correct\\\":false,\\\"clue\\\":\\\"This expression gives an approximation (an overestimation, in this case) of the particle's distance during that time frame. However, the actual distance would be less, because the velocity is decreasing on this interval.\\\",\\\"originalIndex\\\":1},{\\\"content\\\":\\\"$t(10)-t(4)$\\\",\\\"correct\\\":false,\\\"clue\\\":\\\"This expression gives us the change in the velocity of the particle between $t=4$ and $t=10$.\\\",\\\"originalIndex\\\":0}],\\\"selectedChoices\\\":[false,true,false,false],\\\"choiceStates\\\":[{\\\"selected\\\":false,\\\"crossedOut\\\":false,\\\"highlighted\\\":false,\\\"rationaleShown\\\":true,\\\"correctnessShown\\\":true,\\\"previouslyAnswered\\\":true,\\\"readOnly\\\":true},{\\\"selected\\\":true,\\\"crossedOut\\\":false,\\\"highlighted\\\":false,\\\"rationaleShown\\\":false,\\\"correctnessShown\\\":false,\\\"previouslyAnswered\\\":false,\\\"readOnly\\\":false},{\\\"selected\\\":false,\\\"crossedOut\\\":false,\\\"highlighted\\\":false,\\\"rationaleShown\\\":true,\\\"correctnessShown\\\":true,\\\"previouslyAnswered\\\":true,\\\"readOnly\\\":true},{\\\"selected\\\":false,\\\"crossedOut\\\":false,\\\"highlighted\\\":false,\\\"rationaleShown\\\":false,\\\"correctnessShown\\\":false,\\\"previouslyAnswered\\\":false,\\\"readOnly\\\":false}]}}\",\"taskContentKey\":\"ag5zfmtoYW4tYWNhZGVteXIgCxIJVG9waWNRdWl6IhF4NzgzZTczMTNlOTA3NThiMww\",\"taskKey\":\"ag5zfmtoYW4tYWNhZGVteXJkCxIWVG9waWNCYXNlZFRhc2tBbmNlc3RvciIva2FpZF8xNjA5MTgxMjU5NTUwNTgyNjAzOTQ0ODE6eGI4MGFkNmRjMTY1MzAwMTIMCxIMTGVhcm5pbmdUYXNrGICAvcfdquULDA\",\"skipped\":false,\"clientDt\":\"2021-05-10T14:08:06.844Z\",\"localTimezoneOffsetSeconds\":-18000,\"context\":null}},\"query\":\"mutation attemptProblem($input: AttemptProblemInput!) {\\n  attemptProblem(attempt: $input) {\\n    result {\\n      userExercise {\\n        ...userExerciseFields\\n        __typename\\n      }\\n      newTask {\\n        cards {\\n          done\\n          cardType\\n          ... on ProblemCard {\\n            exerciseName\\n            problemType\\n            __typename\\n          }\\n          __typename\\n        }\\n        includeSkipButton\\n        task {\\n          id\\n          key\\n          pointBounty\\n          pointsEarned\\n          taskType\\n          completionCriteria {\\n            name\\n            __typename\\n          }\\n          ... on PracticeTask {\\n            promotionCriteria {\\n              name\\n              value\\n              __typename\\n            }\\n            reservedItems\\n            reservedItemsCompleted\\n            taskAttemptHistory {\\n              correct\\n              timeDone\\n              seenHint\\n              itemId\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        userExercises {\\n          ...userExerciseFields\\n          __typename\\n        }\\n        __typename\\n      }\\n      actionResults {\\n        attemptCorrect\\n        notificationsAdded {\\n          avatarParts\\n          badges\\n          readable\\n          toast\\n          urgent\\n          continueUrl\\n          __typename\\n        }\\n        pointsEarned {\\n          points\\n          __typename\\n        }\\n        __typename\\n      }\\n      attemptPromotions {\\n        fpmPromotions {\\n          progressKey\\n          level\\n          __typename\\n        }\\n        __typename\\n      }\\n      updatedRecommendations {\\n        contentId\\n        kind\\n        sourceId\\n        __typename\\n      }\\n      error {\\n        code\\n        debugMessage\\n        uuid\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment userExerciseFields on UserExercise {\\n  exerciseModel: exercise {\\n    id\\n    assessmentItemCount: numAssessmentItems\\n    displayName\\n    isQuiz\\n    isSkillCheck\\n    name\\n    nodeSlug\\n    progressKey\\n    translatedDisplayName\\n    relatedContent {\\n      id\\n      contentKind\\n      kind\\n      thumbnailUrl\\n      translatedTitle\\n      topicPaths {\\n        path {\\n          id\\n          kind\\n          slug\\n          __typename\\n        }\\n        __typename\\n      }\\n      ... on Article {\\n        kaUrl\\n        nodeSlug\\n        relativeUrl\\n        slug\\n        __typename\\n      }\\n      ... on Video {\\n        duration\\n        imageUrl\\n        kaUrl\\n        nodeSlug\\n        relativeUrl\\n        slug\\n        translatedYoutubeId\\n        __typename\\n      }\\n      __typename\\n    }\\n    relatedVideos {\\n      conceptTagsInfo: conceptTags {\\n        id\\n        displayName\\n        slug\\n        __typename\\n      }\\n      contentKind\\n      duration\\n      id\\n      imageUrl\\n      kaUrl\\n      kind\\n      nodeSlug\\n      progressKey\\n      relativeUrl\\n      slug\\n      thumbnailUrl\\n      translatedDescription\\n      translatedTitle\\n      translatedYoutubeId\\n      __typename\\n    }\\n    problemTypes {\\n      items {\\n        id\\n        live\\n        sha\\n        __typename\\n      }\\n      name\\n      relatedVideos\\n      __typename\\n    }\\n    translatedProblemTypes {\\n      items {\\n        id\\n        live\\n        sha\\n        __typename\\n      }\\n      name\\n      relatedVideos\\n      __typename\\n    }\\n    __typename\\n  }\\n  exercise: exerciseName\\n  fpmMasteryLevel\\n  lastAttemptNumber\\n  lastCountHints\\n  lastDone\\n  lastMasteryUpdate\\n  longestStreak\\n  maximumExerciseProgressDt: maximumExerciseProgressDate\\n  streak\\n  totalCorrect\\n  totalDone\\n  __typename\\n}\\n\"}`,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
                });
            })
        }
    })
}

function fetchExerciseId() {
    var gex = /"id"\s*:\s*"([x].+?)"/;
    if ([...document.getElementsByTagName('script')].filter(e => e.textContent.includes("contentId")).length > 0){
        document.getElementById('injectLmao').style.setProperty("background-color", "rgb(113, 179, 7)", "important")
        document.getElementById('injectLmao').setAttribute("solCount", 0)
        document.getElementById('injectLmao').innerHTML = '<span class="_1alfwn7n">Solve</span>'
        document.getElementById('injectLmao').addEventListener('click', () => {
            document.getElementById('injectLmao').removeEventListener('click', this)
            document.getElementById('injectLmao').style.setProperty("background-color", "rgba(19, 1, 1, 0.3)", "important")
            document.getElementById('injectLmao').innerHTML = '<span class="_1alfwn7n">Solving...</span>'
            var alpha = [...document.getElementsByTagName('script')].filter(e => e.textContent.includes("contentId"))[0].textContent
            var bravo = alpha.match(gex)[1]
            getExerciseDetails(bravo)
        })
    } else {
        var paths = window.location.pathname.split('/')

        fetch("https://www.khanacademy.org/api/internal/graphql/UserAssignments", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US,en;q=0.9",
              "cache-control": "no-cache",
              "content-type": "application/json",
              "pragma": "no-cache",
              "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
              "sec-ch-ua-mobile": "?0",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-ka-fkey": getCookie('fkey')
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `{\"operationName\":\"UserAssignments\",\"variables\":{\"after\":null,\"pageSize\":100,\"needAssignmentCount\":false,\"studentListId\":\"${paths[paths.length-1]}\",\"coachKaid\":\"${paths[paths.length-3]}\",\"orderBy\":\"DUE_DATE_DESC\",\"dueAfter\":null,\"dueBefore\":\"2022-04-27T14:40:00.077Z\"},\"query\":\"query UserAssignments($after: ID, $dueAfter: DateTime, $dueBefore: DateTime, $pageSize: Int, $orderBy: AssignmentOrder!, $needAssignmentCount: Boolean!, $studentListId: String, $coachKaid: String) {\\n  user {\\n    id\\n    kaid\\n    assignmentCount(dueAfter: $dueAfter) @include(if: $needAssignmentCount)\\n    assignmentsPage(after: $after, dueAfter: $dueAfter, dueBefore: $dueBefore, pageSize: $pageSize, orderBy: $orderBy, studentListId: $studentListId, coachKaid: $coachKaid) {\\n      assignments {\\n        id\\n        key\\n        subjectSlug\\n        contents {\\n          ...ContentFields\\n          __typename\\n        }\\n        assignedDate\\n        dueDate\\n        studentList {\\n          id\\n          cacheId\\n          name\\n          __typename\\n        }\\n        totalCompletionStates: itemCompletionStates {\\n          student {\\n            id\\n            kaid\\n            __typename\\n          }\\n          state\\n          completedOn\\n          bestScore {\\n            numCorrect\\n            numAttempted\\n            __typename\\n          }\\n          __typename\\n        }\\n        exerciseConfig {\\n          itemPickerStrategy\\n          __typename\\n        }\\n        __typename\\n      }\\n      pageInfo {\\n        nextCursor\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ContentFields on LearnableContent {\\n  contentId: id\\n  id\\n  kind\\n  title: translatedTitle\\n  defaultUrlPath\\n  topicPaths {\\n    path {\\n      id\\n      kind\\n      slug\\n      __typename\\n    }\\n    __typename\\n  }\\n  description: translatedDescription\\n  thumbnailUrl\\n  slug\\n  ... on Exercise {\\n    expectedDoNCount: exerciseLength\\n    timeEstimate {\\n      lowerBound\\n      upperBound\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on Video {\\n    youtubeId\\n    translatedYoutubeId\\n    duration\\n    __typename\\n  }\\n  __typename\\n}\\n\"}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          }).then(response => response.json())
          .then(e => {
              var title = document.querySelector("[data-test-id='modal-title']");
              e.data.user.assignmentsPage.assignments.forEach(assignment => {
                    try {
                        if (assignment.contents[0].title == title.textContent) {
                            document.getElementById('injectLmao').style.setProperty("background-color", "rgb(113, 179, 7)", "important")
                            document.getElementById('injectLmao').setAttribute("solCount", 0)
                            document.getElementById('injectLmao').innerHTML = '<span class="_1alfwn7n">Solve</span>'
                            document.getElementById('injectLmao').addEventListener('click', () => {
                                document.getElementById('injectLmao').removeEventListener('click', this)
                                document.getElementById('injectLmao').style.setProperty("background-color", "rgba(19, 1, 1, 0.3)", "important")
                                document.getElementById('injectLmao').innerHTML = '<span class="_1alfwn7n">Solving...</span>'
                                getExerciseDetails(assignment.contents[0].contentId)
                            })
                        }
                    } catch (err) {
                        
                    }
              })
          });
          fetch("https://www.khanacademy.org/api/internal/graphql/UserAssignments", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US,en;q=0.9",
              "cache-control": "no-cache",
              "content-type": "application/json",
              "pragma": "no-cache",
              "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
              "sec-ch-ua-mobile": "?0",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-ka-fkey": getCookie('fkey')
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `{\"operationName\":\"UserAssignments\",\"variables\":{\"after\":null,\"pageSize\":100,\"needAssignmentCount\":false,\"studentListId\":\"${paths[paths.length-1]}\",\"coachKaid\":\"${paths[paths.length-3]}\",\"dueAfter\":\"2022-04-28T17:50:00.000Z\",\"orderBy\":\"DUE_DATE_ASC\",\"dueBefore\":null},\"query\":\"query UserAssignments($after: ID, $dueAfter: DateTime, $dueBefore: DateTime, $pageSize: Int, $orderBy: AssignmentOrder!, $needAssignmentCount: Boolean!, $studentListId: String, $coachKaid: String) {\\n  user {\\n    id\\n    kaid\\n    assignmentCount(dueAfter: $dueAfter) @include(if: $needAssignmentCount)\\n    assignmentsPage(after: $after, dueAfter: $dueAfter, dueBefore: $dueBefore, pageSize: $pageSize, orderBy: $orderBy, studentListId: $studentListId, coachKaid: $coachKaid) {\\n      assignments {\\n        id\\n        key\\n        subjectSlug\\n        contents {\\n          ...ContentFields\\n          __typename\\n        }\\n        assignedDate\\n        dueDate\\n        studentList {\\n          id\\n          cacheId\\n          name\\n          __typename\\n        }\\n        totalCompletionStates: itemCompletionStates {\\n          student {\\n            id\\n            kaid\\n            __typename\\n          }\\n          state\\n          completedOn\\n          bestScore {\\n            numCorrect\\n            numAttempted\\n            __typename\\n          }\\n          __typename\\n        }\\n        exerciseConfig {\\n          itemPickerStrategy\\n          __typename\\n        }\\n        __typename\\n      }\\n      pageInfo {\\n        nextCursor\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ContentFields on LearnableContent {\\n  contentId: id\\n  id\\n  kind\\n  title: translatedTitle\\n  defaultUrlPath\\n  topicPaths {\\n    path {\\n      id\\n      kind\\n      slug\\n      __typename\\n    }\\n    __typename\\n  }\\n  description: translatedDescription\\n  thumbnailUrl\\n  slug\\n  ... on Exercise {\\n    expectedDoNCount: exerciseLength\\n    timeEstimate {\\n      lowerBound\\n      upperBound\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on Video {\\n    youtubeId\\n    translatedYoutubeId\\n    duration\\n    __typename\\n  }\\n  __typename\\n}\\n\"}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          }).then(response => response.json())
          .then(e => {
              var title = document.querySelector("[data-test-id='modal-title']");
              e.data.user.assignmentsPage.assignments.forEach(assignment => {
                    try {
                        if (assignment.contents[0].title == title.textContent) {
                            document.getElementById('injectLmao').style.setProperty("background-color", "rgb(113, 179, 7)", "important")
                            document.getElementById('injectLmao').setAttribute("solCount", 0)
                            document.getElementById('injectLmao').innerHTML = '<span class="_1alfwn7n">Solve</span>'
                            document.getElementById('injectLmao').addEventListener('click', () => {
                                document.getElementById('injectLmao').removeEventListener('click', this)
                                document.getElementById('injectLmao').style.setProperty("background-color", "rgba(19, 1, 1, 0.3)", "important")
                                document.getElementById('injectLmao').innerHTML = '<span class="_1alfwn7n">Solving...</span>'
                                getExerciseDetails(assignment.contents[0].contentId)
                            })
                        }
                    } catch (err) {
                        
                    }
              })
          });
          fetch("https://www.khanacademy.org/api/internal/graphql/UserAssignments", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US,en;q=0.9",
              "cache-control": "no-cache",
              "content-type": "application/json",
              "pragma": "no-cache",
              "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
              "sec-ch-ua-mobile": "?0",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-ka-fkey": getCookie('fkey')
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `{\"operationName\":\"UserAssignments\",\"variables\":{\"after\":null,\"pageSize\":100,\"needAssignmentCount\":false,\"studentListId\":\"${paths[paths.length-1]}\",\"coachKaid\":\"${paths[paths.length-3]}\",\"orderBy\":\"DUE_DATE_DESC\",\"dueAfter\":null,\"dueBefore\":\"2022-04-28T18:01:00.496Z\"},\"query\":\"query UserAssignments($after: ID, $dueAfter: DateTime, $dueBefore: DateTime, $pageSize: Int, $orderBy: AssignmentOrder!, $needAssignmentCount: Boolean!, $studentListId: String, $coachKaid: String) {\\n  user {\\n    id\\n    kaid\\n    assignmentCount(dueAfter: $dueAfter) @include(if: $needAssignmentCount)\\n    assignmentsPage(after: $after, dueAfter: $dueAfter, dueBefore: $dueBefore, pageSize: $pageSize, orderBy: $orderBy, studentListId: $studentListId, coachKaid: $coachKaid) {\\n      assignments {\\n        id\\n        key\\n        subjectSlug\\n        contents {\\n          ...ContentFields\\n          __typename\\n        }\\n        assignedDate\\n        dueDate\\n        studentList {\\n          id\\n          cacheId\\n          name\\n          __typename\\n        }\\n        totalCompletionStates: itemCompletionStates {\\n          student {\\n            id\\n            kaid\\n            __typename\\n          }\\n          state\\n          completedOn\\n          bestScore {\\n            numCorrect\\n            numAttempted\\n            __typename\\n          }\\n          __typename\\n        }\\n        exerciseConfig {\\n          itemPickerStrategy\\n          __typename\\n        }\\n        __typename\\n      }\\n      pageInfo {\\n        nextCursor\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ContentFields on LearnableContent {\\n  contentId: id\\n  id\\n  kind\\n  title: translatedTitle\\n  defaultUrlPath\\n  topicPaths {\\n    path {\\n      id\\n      kind\\n      slug\\n      __typename\\n    }\\n    __typename\\n  }\\n  description: translatedDescription\\n  thumbnailUrl\\n  slug\\n  ... on Exercise {\\n    expectedDoNCount: exerciseLength\\n    timeEstimate {\\n      lowerBound\\n      upperBound\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on Video {\\n    youtubeId\\n    translatedYoutubeId\\n    duration\\n    __typename\\n  }\\n  __typename\\n}\\n\"}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          }).then(response => response.json())
          .then(e => {
              var title = document.querySelector("[data-test-id='modal-title']");
              e.data.user.assignmentsPage.assignments.forEach(assignment => {
                    try {
                        if (assignment.contents[0].title == title.textContent) {
                            document.getElementById('injectLmao').style.setProperty("background-color", "rgb(113, 179, 7)", "important")
                            document.getElementById('injectLmao').setAttribute("solCount", 0)
                            document.getElementById('injectLmao').innerHTML = '<span class="_1alfwn7n">Solve</span>'
                            document.getElementById('injectLmao').addEventListener('click', () => {
                                document.getElementById('injectLmao').removeEventListener('click', this)
                                document.getElementById('injectLmao').style.setProperty("background-color", "rgba(19, 1, 1, 0.3)", "important")
                                document.getElementById('injectLmao').innerHTML = '<span class="_1alfwn7n">Solving...</span>'
                                getExerciseDetails(assignment.contents[0].contentId)
                            })
                        }
                    } catch (err) {
                        
                    }
              })
          });
    }
}
async function getSha(id, liste) {
    return new Promise ((resolve) => {
        liste.forEach(alpha => {
            alpha.items.forEach(bravo => {
                if (bravo.id == id.toString()) {
                    resolve(bravo.sha)
                }
            })
        })
        resolve("");
    })
}

async function collectShas(reservedItems, liste) {
    return new Promise((resolve) => {
        var shas = {}
        reservedItems.forEach(async item => {
            var id = item.split('|')[1]
            shas[id] = await getSha(id,liste)
        })
        resolve(shas)
    })
}

async function oragnizeSha(reservedItems) {
    return new Promise((resolve) => {
        var shas = {}
        reservedItems.forEach(async item => {
            shas[item.id] = item.sha
        })
        resolve(shas)
    })
}

function getExerciseDetails(exerciseId) {
    fetch("https://www.khanacademy.org/api/internal/graphql/getOrCreatePracticeTask", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-ka-fkey": getCookie('fkey')
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{\"operationName\":\"getOrCreatePracticeTask\",\"variables\":{\"input\":{\"exerciseId\":\"${exerciseId}\",\"stopCardPersist\":false,\"canReserveItems\":true}},\"query\":\"mutation getOrCreatePracticeTask($input: GetOrCreatePracticeTaskInput!) {\\n  getOrCreatePracticeTask(input: $input) {\\n    result {\\n      error {\\n        code\\n        debugMessage\\n        __typename\\n      }\\n      userTask {\\n        cards {\\n          done\\n          cardType\\n          ... on ProblemCard {\\n            exerciseName\\n            problemType\\n            __typename\\n          }\\n          __typename\\n        }\\n        includeSkipButton\\n        task {\\n          contentKey\\n          exerciseLength\\n          id\\n          key\\n          pointBounty\\n          pointsEarned\\n          slug\\n          taskType\\n          timeEstimate {\\n            lowerBound\\n            upperBound\\n            __typename\\n          }\\n          completionCriteria {\\n            name\\n            __typename\\n          }\\n          promotionCriteria {\\n            name\\n            value\\n            __typename\\n          }\\n          reservedItems\\n          reservedItemsCompleted\\n          taskAttemptHistory {\\n            correct\\n            timeDone\\n            seenHint\\n            itemId\\n            __typename\\n          }\\n          __typename\\n        }\\n        userExercises {\\n          ...userExerciseFields\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment userExerciseFields on UserExercise {\\n  exerciseModel: exercise {\\n    id\\n    assessmentItemCount: numAssessmentItems\\n    displayName\\n    isQuiz\\n    isSkillCheck\\n    name\\n    nodeSlug\\n    progressKey\\n    translatedDisplayName\\n    relatedContent {\\n      id\\n      contentKind\\n      kind\\n      thumbnailUrl\\n      translatedTitle\\n      topicPaths {\\n        path {\\n          id\\n          kind\\n          slug\\n          __typename\\n        }\\n        __typename\\n      }\\n      ... on Article {\\n        kaUrl\\n        nodeSlug\\n        relativeUrl\\n        slug\\n        __typename\\n      }\\n      ... on Video {\\n        duration\\n        imageUrl\\n        kaUrl\\n        nodeSlug\\n        relativeUrl\\n        slug\\n        translatedYoutubeId\\n        __typename\\n      }\\n      __typename\\n    }\\n    relatedVideos {\\n      conceptTagsInfo: conceptTags {\\n        id\\n        displayName\\n        slug\\n        __typename\\n      }\\n      contentKind\\n      duration\\n      id\\n      imageUrl\\n      kaUrl\\n      kind\\n      nodeSlug\\n      progressKey\\n      relativeUrl\\n      slug\\n      thumbnailUrl\\n      translatedDescription\\n      translatedTitle\\n      translatedYoutubeId\\n      __typename\\n    }\\n    problemTypes {\\n      items {\\n        id\\n        live\\n        sha\\n        __typename\\n      }\\n      name\\n      relatedVideos\\n      __typename\\n    }\\n    translatedProblemTypes {\\n      items {\\n        id\\n        live\\n        sha\\n        __typename\\n      }\\n      name\\n      relatedVideos\\n      __typename\\n    }\\n    __typename\\n  }\\n  exercise: exerciseName\\n  fpmMasteryLevel\\n  lastAttemptNumber\\n  lastCountHints\\n  lastDone\\n  lastMasteryUpdate\\n  longestStreak\\n  maximumExerciseProgressDt: maximumExerciseProgressDate\\n  streak\\n  totalCorrect\\n  totalDone\\n  __typename\\n}\\n"}`,
    //"body": `{\"operationName\":\"getOrCreatePracticeTask\",\"variables\":{\"input\":{\"exerciseId\":\"${exerciseId}\",\"stopCardPersist\":false,\"canReserveItems\":true}},\"query\":\"mutation getOrCreatePracticeTask($input: GetOrCreatePracticeTaskInput!) {\\n  getOrCreatePracticeTask(input: $input) {\\n    result {\\n      error {\\n        code\\n        debugMessage\\n        __typename\\n      }\\n      userTask {\\n        cards {\\n          done\\n          cardType\\n          ... on ProblemCard {\\n            exerciseName\\n            problemType\\n            __typename\\n          }\\n          __typename\\n        }\\n        includeSkipButton\\n        includeOptOutButton\\n        includeWorkedExampleButton\\n        practiceExercise {\\n          ...userExerciseFields\\n          __typename\\n        }\\n        readOnly\\n        task {\\n          contentKey\\n          directLink\\n          description\\n          exerciseLength\\n          id\\n          key\\n          languageTag\\n          pointBounty\\n          pointsEarned\\n          slug\\n          taskType\\n          title\\n          timeEstimate {\\n            lowerBound\\n            upperBound\\n            __typename\\n          }\\n          translatedDescription\\n          translatedTitle\\n          completionCriteria {\\n            name\\n            __typename\\n          }\\n          promotionCriteria {\\n            name\\n            value\\n            __typename\\n          }\\n          reservedItems\\n          reservedItemsCompleted\\n          taskAttemptHistory {\\n            correct\\n            timeDone\\n            seenHint\\n            itemId\\n            __typename\\n          }\\n          __typename\\n        }\\n        userExercises {\\n          ...userExerciseFields\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment userExerciseFields on UserExercise {\\n  exerciseModel: exercise {\\n    id\\n    assessmentItemCount: numAssessmentItems\\n    displayName\\n    isQuiz\\n    isSkillCheck\\n    name\\n    nodeSlug\\n    progressKey\\n    translatedDisplayName\\n    relatedContent {\\n      id\\n      contentKind\\n      kind\\n      thumbnailUrl\\n      translatedTitle\\n      topicPaths {\\n        path {\\n          id\\n          kind\\n          slug\\n          __typename\\n        }\\n        __typename\\n      }\\n      ... on Article {\\n        kaUrl\\n        nodeSlug\\n        relativeUrl\\n        slug\\n        __typename\\n      }\\n      ... on Video {\\n        duration\\n        imageUrl\\n        kaUrl\\n        nodeSlug\\n        relativeUrl\\n        slug\\n        translatedYoutubeId\\n        __typename\\n      }\\n      __typename\\n    }\\n    relatedVideos {\\n      conceptTagsInfo: conceptTags {\\n        id\\n        displayName\\n        slug\\n        __typename\\n      }\\n      contentKind\\n      duration\\n      id\\n      imageUrl\\n      kaUrl\\n      kind\\n      nodeSlug\\n      progressKey\\n      relativeUrl\\n      slug\\n      thumbnailUrl\\n      translatedDescription\\n      translatedTitle\\n      translatedYoutubeId\\n      __typename\\n    }\\n    problemTypes {\\n      items {\\n        id\\n        live\\n        sha\\n        __typename\\n      }\\n      name\\n      relatedVideos\\n      __typename\\n    }\\n    translatedProblemTypes {\\n      items {\\n        id\\n        live\\n        sha\\n        __typename\\n      }\\n      name\\n      relatedVideos\\n      __typename\\n    }\\n    __typename\\n  }\\n  exercise: exerciseName\\n  fpmMasteryLevel\\n  lastAttemptNumber\\n  lastCountHints\\n  lastDone\\n  lastMasteryUpdate\\n  longestStreak\\n  masteryPoints\\n  maximumExerciseProgressDt: maximumExerciseProgressDate\\n  streak\\n  totalCorrect\\n  totalDone\\n  __typename\\n}\\n"}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
    }).then(response => response.json())
    .then(async e => {
        try {
            var shas = {}
            var reservedItems = e.data.getOrCreatePracticeTask.result.userTask.task.reservedItems
            var liste = e.data.getOrCreatePracticeTask.result.userTask.userExercises[0].exerciseModel.problemTypes
            var exerciseId = e.data.getOrCreatePracticeTask.result.userTask.userExercises[0].exerciseModel.id
            var contentKey = e.data.getOrCreatePracticeTask.result.userTask.task.contentKey
            var taskkey = e.data.getOrCreatePracticeTask.result.userTask.task.key
            var shas = await collectShas(reservedItems, liste)
            solveExercises(exerciseId, reservedItems, contentKey, taskkey, shas)
        } catch (err) {
            console.log(err)
            document.getElementById('injectLmao').style.setProperty("background-color", "black", "important")
            document.getElementById('injectLmao').innerHTML = '<span class="_1alfwn7n">Error</span>'
        }
    })
}

function manualSolve(exerciseId) {
    fetch("https://www.khanacademy.org/api/internal/_mt/graphql/getAssessmentItem", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-ka-fkey": getCookie('fkey')
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{\"operationName\":\"getAssessmentItem\",\"variables\":{\"input\":{\"exerciseId\":\"${exerciseId}\",\"problemNumber\":1,\"quizProblemNumber\":null,\"lastSeenProblemSha\":\"3bee9beafa90ca32e3c1c90a13d8fa307a069d84\"}},\"query\":\"query getAssessmentItem($input: AssessmentItemInput!) {\\n  assessmentItem(input: $input) {\\n    item {\\n      id\\n      sha\\n      problemType\\n      itemData\\n      __typename\\n    }\\n    error {\\n      code\\n      debugMessage\\n      __typename\\n    }\\n    __typename\\\n  }\\n}\\n\"}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
    }).then(response => response.json())
    .then(e => {
        var answers = JSON.parse(e.data.assessmentItem.item.itemData).question.widgets
        console.log(answers)
    });
}

function solveExercises(exerciseId, reservedItems, contentKey, taskkey, shas) {
    ansArray = []
    res = {}
    reservedItems.forEach(d => ansArray.push(d.split('|')[1]))
    reservedItems.forEach(question => {
        var questionId = question.split('|')[1]
        fetch("https://www.khanacademy.org/api/internal/_mt/graphql/getAssessmentItem", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-ka-fkey": getCookie('fkey')
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"operationName\":\"getAssessmentItem\",\"variables\":{\"input\":{\"exerciseId\":\"${exerciseId}\",\"itemId\":\"${questionId}\"}},\"query\":\"query getAssessmentItem($input: AssessmentItemInput!) {\\n  assessmentItem(input: $input) {\\n    item {\\n      id\\n      sha\\n      problemType\\n      itemData\\n      __typename\\n    }\\n    error {\\n      code\\n      debugMessage\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
        }).then(response => response.json())
        .then(e => {
            var answers = JSON.parse(e.data.assessmentItem.item.itemData).question.widgets
            res[ansArray.indexOf(questionId)] = answers
        });
    })
    var zeta = setInterval(function() {
        if (Object.keys(res).length == ansArray.length) {
        attemptAnswer(res, ansArray.length, exerciseId, contentKey, taskkey, shas, ansArray)
           clearInterval(zeta);
        }
    }, 100);
}

function attemptAnswer(res, len, exerciseId, contentKey, taskkey, shas, ansArray) {
    for (i=0; i < len; i++) {
        var dt = new Date()
        var clientDt = dt.toISOString()
        var attemptState = {}
        var attemptContent = [[],[]]
        Object.keys(res[i]).forEach(input => {
            if (input.includes("expression")) {
                attemptState[input] = {}
                attemptContent[0].push({})
            } else if (input.includes("radio")) {
                choiceStates = []
                choices = []
                res[i][input].options.choices.forEach(choice => {
                    choiceStates.push({})
                    choices.push({})
                })
                attemptState[input] = {}
                attemptContent[0].push({})
            } else if (input.includes('numeric')) {
                attemptContent[0].push({})
                attemptState[input] = {}
            } else {
                console.log("Unknown Res Type", res[i])
            }
        })
        betterBody = {"operationName":"attemptProblem","variables":{"input":{"problemNumber":null,"assessmentItemSha":`${shas[ansArray[i]]}`,"assessmentItemId":`${ansArray[i]}`,"completed":true,"exerciseId":`${exerciseId}`,"topicId":"xe09dd0724a946311","problemType":"Type 3 ^N Notation","countHints":0,"timeTaken":180,"attemptNumber":1,"attemptContent":JSON.stringify(attemptContent),"attemptState":JSON.stringify(attemptState),"taskContentKey":`${contentKey}`,"taskKey":`${taskkey}`,"skipped":false,"clientDt":`${clientDt}`,"localTimezoneOffsetSeconds":-18000,"context":null}},"query":"mutation attemptProblem($input: AttemptProblemInput!) {\n  attemptProblem(attempt: $input) {\n    result {\n      userExercise {\n        ...userExerciseFields\n        __typename\n      }\n      newTask {\n        cards {\n          done\n          cardType\n          ... on ProblemCard {\n            exerciseName\n            problemType\n            __typename\n          }\n          __typename\n        }\n        includeSkipButton\n        task {\n          id\n          key\n          pointBounty\n          pointsEarned\n          taskType\n          completionCriteria {\n            name\n            __typename\n          }\n          ... on PracticeTask {\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        userExercises {\n          ...userExerciseFields\n          __typename\n        }\n        __typename\n      }\n      actionResults {\n        attemptCorrect\n        notificationsAdded {\n          avatarParts\n          badges\n          readable\n          toast\n          urgent\n          continueUrl\n          __typename\n        }\n        pointsEarned {\n          points\n          __typename\n        }\n        __typename\n      }\n      attemptPromotions {\n        fpmPromotions {\n          progressKey\n          level\n          __typename\n        }\n        __typename\n      }\n      updatedRecommendations {\n        contentId\n        kind\n        sourceId\n        __typename\n      }\n      error {\n        code\n        debugMessage\n        uuid\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment userExerciseFields on UserExercise {\n  exerciseModel: exercise {\n    id\n    assessmentItemCount: numAssessmentItems\n    displayName\n    isQuiz\n    isSkillCheck\n    name\n    nodeSlug\n    progressKey\n    translatedDisplayName\n    relatedContent {\n      id\n      contentKind\n      kind\n      thumbnailUrl\n      translatedTitle\n      topicPaths {\n        path {\n          id\n          kind\n          slug\n          __typename\n        }\n        __typename\n      }\n      ... on Article {\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        __typename\n      }\n      ... on Video {\n        duration\n        imageUrl\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        translatedYoutubeId\n        __typename\n      }\n      __typename\n    }\n    relatedVideos {\n      conceptTagsInfo: conceptTags {\n        id\n        displayName\n        slug\n        __typename\n      }\n      contentKind\n      duration\n      id\n      imageUrl\n      kaUrl\n      kind\n      nodeSlug\n      progressKey\n      relativeUrl\n      slug\n      thumbnailUrl\n      translatedDescription\n      translatedTitle\n      translatedYoutubeId\n      __typename\n    }\n    problemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    translatedProblemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    __typename\n  }\n  exercise: exerciseName\n  fpmMasteryLevel\n  lastAttemptNumber\n  lastCountHints\n  lastDone\n  lastMasteryUpdate\n  longestStreak\n  maximumExerciseProgressDt: maximumExerciseProgressDate\n  streak\n  totalCorrect\n  totalDone\n  __typename\n}\n"}
        body = {
            "operationName": "attemptProblem",
            "query": `mutation attemptProblem($input: AttemptProblemInput!) {\\n  attemptProblem(attempt: $input) {\\n    result {\\n      userExercise {\\n        ...userExerciseFields\\n        __typename\\n      }\\n      newTask {\\n        cards {\\n          done\\n          cardType\\n          ... on ProblemCard {\\n            exerciseName\\n            problemType\\n            __typename\\n          }\\n          __typename\\n        }\\n        includeSkipButton\\n        task {\\n          description\\n          id\\n          key\\n          languageTag\\n          pointBounty\\n          pointsEarned\\n          taskType\\n          title\\n          translatedDescription\\n          translatedTitle\\n          completionCriteria {\\n            name\\n            __typename\\n          }\\n          ... on PracticeTask {\\n            promotionCriteria {\\n              name\\n              value\\n              __typename\\n            }\\n            reservedItems\\n            reservedItemsCompleted\\n            taskAttemptHistory {\\n              correct\\n              timeDone\\n              seenHint\\n              itemId\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        userExercises {\\n          ...userExerciseFields\\n          __typename\\n        }\\n        __typename\\n      }\\n      actionResults {\\n        attemptCorrect\\n        notificationsAdded {\\n          avatarParts\\n          badges\\n          readable\\n          toast\\n          urgent\\n          continueUrl\\n          __typename\\n        }\\n        pointsEarned {\\n          points\\n          __typename\\n        }\\n        __typename\\n      }\\n      attemptPromotions {\\n        fpmPromotions {\\n          progressKey\\n          level\\n          __typename\\n        }\\n        __typename\\n      }\\n      updatedRecommendations {\\n        contentId\\n        kind\\n        sourceId\\n        __typename\\n      }\\n      error {\\n        code\\n        debugMessage\\n        uuid\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment userExerciseFields on UserExercise {\\n  exerciseModel: exercise {\\n    id\\n    assessmentItemCount: numAssessmentItems\\n    displayName\\n    isQuiz\\n    isSkillCheck\\n    name\\n    nodeSlug\\n    progressKey\\n    translatedDisplayName\\n    relatedContent {\\n      id\\n      contentKind\\n      kind\\n      thumbnailUrl\\n      translatedTitle\\n      topicPaths {\\n        path {\\n          id\\n          kind\\n          slug\\n          __typename\\n        }\\n        __typename\\n      }\\n      ... on Article {\\n        kaUrl\\n        nodeSlug\\n        relativeUrl\\n        slug\\n        __typename\\n      }\\n      ... on Video {\\n        duration\\n        imageUrl\\n        kaUrl\\n        nodeSlug\\n        relativeUrl\\n        slug\\n        translatedYoutubeId\\n        __typename\\n      }\\n      __typename\\n    }\\n    relatedVideos {\\n      conceptTagsInfo: conceptTags {\\n        id\\n        displayName\\n        slug\\n        __typename\\n      }\\n      contentKind\\n      duration\\n      id\\n      imageUrl\\n      kaUrl\\n      kind\\n      nodeSlug\\n      progressKey\\n      relativeUrl\\n      slug\\n      thumbnailUrl\\n      translatedDescription\\n      translatedTitle\\n      translatedYoutubeId\\n      __typename\\n    }\\n    problemTypes {\\n      items {\\n        id\\n        live\\n        sha\\n        __typename\\n      }\\n      name\\n      relatedVideos\\n      __typename\\n    }\\n    translatedProblemTypes {\\n      items {\\n        id\\n        live\\n        sha\\n        __typename\\n      }\\n      name\\n      relatedVideos\\n      __typename\\n    }\\n    __typename\\n  }\\n  exercise: exerciseName\\n  fpmMasteryLevel\\n  lastAttemptNumber\\n  lastCountHints\\n  lastDone\\n  lastMasteryUpdate\\n  longestStreak\\n  masteryPoints\\n  maximumExerciseProgressDt: maximumExerciseProgressDate\\n  streak\\n  totalCorrect\\n  totalDone\\n  __typename\\n}\\n`,
            "variables": {
                "input": {
                    "assessmentItemSha": shas[ansArray[i]],
                    "assessmentItemId": ansArray[i],
                    "attemptContent": JSON.stringify(attemptContent),
                    "attemptNumber": 1,
                    "attemptState": JSON.stringify(attemptState),
                    "clientDt": clientDt,
                    "completed": true,
                    "context": null,
                    "countHints": 0,
                    "exerciseId": exerciseId,
                    "gaReferrer": "",
                    "localTimezoneOffsetSeconds": -21600,
                    "problemNumber": null,
                    "problemType": "1. Explicit",
                    "skipped": false,
                    "taskContentKey": contentKey,
                    "taskKey": taskkey,
                    "timeTaken": 60,
                }
            }
        }
        fetch("https://www.khanacademy.org/api/internal/_mt/graphql/attemptProblem", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": `\\"Google Chrome\\";v=\\"87\\", \\" Not;A Brand\\";v=\\"99\\", \\"Chromium\\";v=\\"87\\"`,
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-ka-fkey": getCookie('fkey')
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify(betterBody),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
        }).then(response => response.text())
        .then(data => {
            var current = parseInt(document.getElementById('injectLmao').getAttribute('solCount'))
            if (current == parseInt(len)-1) {
                document.getElementById('injectLmao').style.setProperty("background-color", "red", "important")
                document.getElementById('injectLmao').innerHTML = '<span class="_1alfwn7n">Done!</span>'
                setTimeout(location.reload.bind(location), 1000);
            } else {
                current += 1
                document.getElementById('injectLmao').innerHTML = `<span class="_1alfwn7n">${current}/${len} Done</span>`
                document.getElementById('injectLmao').setAttribute("solCount", current.toString())
            }
        });
    }
}
