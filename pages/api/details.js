export default function handler(req, res) {
  res.status(200).json(
    {
      "pageName": "Details",
      "userDetails": [
        {
          "name": "Thomas Rodriguez",
          "description": "These is very adorable. I am loving this. Seomtimes this pictures just are beautiful!",
          "icon": "/assets/user1.png"
        },
        {
          "name": "Thomas Rodriguez",
          "description": "These is very adorable. I am loving this. Seomtimes this pictures just are beautiful!",
          "icon": "/assets/user2.png"
        },
        {
          "name": "Thomas Rodriguez",
          "description": "These is very adorable. I am loving this. Seomtimes this pictures just are beautiful!",
          "icon": "/assets/user3.png"
        },
        {
          "name": "Thomas Rodriguez",
          "description": "These is very adorable. I am loving this. Seomtimes this pictures just are beautiful!",
          "icon": "/assets/user4.png"
        }
      ]
    }
  )
}