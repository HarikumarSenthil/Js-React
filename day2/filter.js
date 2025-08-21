

// Sample Board (sample api response)
const board = {
  "id": "70ph04zs2",
  "title": "Sample Project Board",
  "description": "A sample board to demonstrate the task management features",
  "createdBy": "1",
  "createdAt": "2025-06-23T12:10:55.610Z",
  "columns": [
    {
      "id": "5htdv7242",
      "title": "To Do",
      "boardId": "70ph04zs2",
      "order": 0,
      "tasks": [
        {
          "id": "wbeo18vq0",
          "title": "Design landing page",
          "description": "Create wireframes and mockups for the new landing page",
          "priority": "high",
          "dueDate": "2025-06-26T12:10:55.610Z",
          "assignedTo": "2",
          "createdBy": "1",
          "createdAt": "2025-06-23T12:10:55.610Z",
          "updatedAt": "2025-06-23T12:10:55.610Z",
          "columnId": "5htdv7242",
          "order": 0
        }
      ]
    },
    {
      "id": "4cfu2ubnh",
      "title": "In Progress",
      "boardId": "70ph04zs2",
      "order": 1,
      "tasks": [
        {
          "id": "blgppidm1",
          "title": "Set up development environment",
          "description": "Configure development tools and dependencies",
          "priority": "medium",
          "dueDate": "2025-06-28T12:10:55.610Z",
          "assignedTo": "3",
          "createdBy": "1",
          "createdAt": "2025-06-23T12:10:55.610Z",
          "updatedAt": "2025-06-23T12:10:55.610Z",
          "columnId": "4cfu2ubnh",
          "order": 1
        }
      ]
    },
    {
      "id": "rs4dawrvk",
      "title": "Done",
      "boardId": "70ph04zs2",
      "order": 2,
      "tasks": [
        {
          "id": "4uz6vwgvx",
          "title": "Write project documentation",
          "description": "Document the project setup and usage instructions",
          "priority": "low",
          "dueDate": "2025-06-30T12:10:55.611Z",
          "assignedTo": "4",
          "createdBy": "1",
          "createdAt": "2025-06-23T12:10:55.611Z",
          "updatedAt": "2025-06-23T12:10:55.611Z",
          "columnId": "rs4dawrvk",
          "order": 0
        }
      ]
    },
    {
      "id": "rs4dawrvk",
      "title": "Todo",
      "boardId": "70ph04zs2",
      "order": 3,
      "tasks": [
        {
          "id": "4uz6vwgvx",
          "title": "Write clean document",
          "description": "Document the project with clean",
          "priority": "high",
          "dueDate": "2025-06-30T12:10:55.611Z",
          "assignedTo": "4",
          "createdBy": "1",
          "createdAt": "2025-06-23T12:10:55.611Z",
          "updatedAt": "2025-06-23T12:10:55.611Z",
          "columnId": "rs4dawrvk",
          "order": 0
        }
      ]
    }
  ]
}



const filteredDatas = (searchQuery)=>{
    const lowerCaseLetters = searchQuery.toLowerCase()
    return {
        ...board,
        columns : board.columns.map(eachcol=>({
         ...eachcol,
        tasks: eachcol.tasks.filter((task)=>
        { return (
            task.title.toLowerCase().includes(lowerCaseLetters)||
            task.description.toLowerCase().includes(lowerCaseLetters))
        }
        )
        }))
    }

}
// search filteredDatas works based upon title and description 
const filteredData = filteredDatas("Project Documentation")

// destructure the response data  (Object destructure)
const {id,title,description} = filteredData
console.log(id)
console.log(title)
console.log(description)

// (array destructure)
const [colid,coltitle,coldescription] = filteredData.columns
console.log(colid)
console.log(coltitle)
console.log(coldescription)