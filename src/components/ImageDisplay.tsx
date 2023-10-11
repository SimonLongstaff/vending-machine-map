import { useEffect, useState } from "react"
import imageCompression from "browser-image-compression"
import { useAppDispatch } from "../app/hooks"
import styled from "styled-components"
import { setIsLoading } from "../features/spinner/spinnerSlice"

interface ImageDisplayProps {
  id: string
}

interface Image {
  id: string
  image_blob: string
}

interface ImageUpload {
  id: string
  image_blob: string
}

export default function ImageDisplay({ id }: ImageDisplayProps) {
  let [image, setImage] = useState<Image>()
  let [isLoading, setLoading] = useState(true)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetch(`https://images.yrin.duckdns.org/images/${id}`)
      .then((res) => res.json())
      .then((data) => setImage(data))

    setLoading(false)
  }, [id])

  const UploadImage = async () => {
    let image = document.querySelector("input[type=file]") as HTMLInputElement
    let file = image.files?.[0]
    let reader = new FileReader()

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }

    if (file) {
      try {
        dispatch(setIsLoading(true))
        const compressedFile = await imageCompression(file, options)
        reader.readAsDataURL(compressedFile)
        reader.onloadend = async () => {
          let url = reader.result as string
          let imageUpload: ImageUpload = {
            id: id,
            image_blob: url,
          }

          await fetch("https://images.yrin.duckdns.org/images", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(imageUpload),
          })
          setImage(imageUpload)
        }
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(setIsLoading(false))
  }

  const DeleteImage = async () => {
    dispatch(setIsLoading(true))
    let response = await fetch(`https://images.yrin.duckdns.org/images/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    dispatch(setIsLoading(false))

    if (response.ok) {
      setImage(undefined)
    } else {
      alert("Error deleting image")
    }
  }

  return (
    <div>
      {image?.image_blob && (
        <ImageContainer>
          <img
            src={image?.image_blob}
            style={{ width: "200px", height: "200px" }}
          />
          <button
            onClick={async () => {
              await DeleteImage()
            }}
          >
            Delete
          </button>
        </ImageContainer>
      )}

      {!image?.image_blob && !isLoading && (
        <div>
          <input type="file" />
          <button onClick={UploadImage}>Upload</button>
        </div>
      )}

      {!image?.image_blob && isLoading && (
        <ImageContainer>
          <img src={"https://placehold.co/200x200"} alt={"loading"} />
        </ImageContainer>
      )}
    </div>
  )
}

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 10px;
`
