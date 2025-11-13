### App Installation and start

```
npm install
npm start
```

APIs route to be hit

```
to get all photos
endpoint - http://localhost:5000/photos
method - get

to get particular photo
endpoint - http://localhost:5000/photos/:id
method - get

to create new photo
endpoint - http://localhost:5000/photos
method - post

dummy json to create
{
  "name":"Test",
  "description":"Test",
  "mime_type":"JPG",
  "media_metadata":{
    "width":30,
    "height":30,
    "photo":"https://render.fineartamerica.com/images/rendered/medium/print/6/8/break/images-medium-5/awesome-solitude-bess-hamiti.jpg"
  }
}

to update a photo
endpoint - http://localhost:5000/photos/:id
method - put

to delete a photo
endpoint - http://localhost:5000/photos/:id
method - delete
```
