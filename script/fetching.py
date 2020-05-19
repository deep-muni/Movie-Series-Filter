import requests
import json

keywords = ["Iron Man",
            "The Incredible Hulk",
            "Iron Man 2",
            "Thor",
            "Captain America: The First Avenger",
            "The Avengers",
            "Iron Man 3",
            "Thor: The Dark World",
            "Captain America: The Winter Soldier",
            "Guardians of the Galaxy",
            "Avengers: Age of Ultron",
            "Ant-Man",
            "Captain America: Civil War",
            "Doctor Strange",
            "Guardians of the Galaxy Vol. 2",
            "Spider-Man: Homecoming",
            "Thor: Ragnarok",
            "Black Panther",
            "Avengers: Infinity War",
            "Ant-Man and the Wasp",
            "Captain Marvel",
            "Avengers: Endgame",
            "Spider-Man: Far from Home",
        ]

for keyword in keywords:
    r = requests.get('http://www.omdbapi.com/?apikey=c5a7afca&t=' + keyword)
    newData = json.loads(r.text)

    myData = {"Title": newData['Title'],
              "Released": newData['Year'],
              "Poster": newData['Poster'],
              "Cast": newData['Actors'].split(', '),
              "Director": newData['Director']}

    print(myData)
