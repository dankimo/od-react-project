export default function handler(req, res) {
  res.status(200).json(
    {
      "pageName": "Gallery",
      "pictureDetails": [
        {
          "description": "a bloke on a beach holding a guitar at sunset"
        },
        {
          "description": "a kitten on a fluffy bed"
        },
        {
          "description": "a city skyline at dusk"
        }
      ],
      "videoDetails": [
        {
          "description": "a bloke on a beach holding a guitar at sunset video"
        },
        {
          "description": "a kitten on a fluffy bed video"
        },
        {
          "description": "a city skyline at dusk video"
        }
      ]
    }
  )
}