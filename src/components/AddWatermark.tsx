import { useEffect, useRef, useState } from 'react'
// @ts-ignore
import watermark from 'watermarkjs'
import cn from 'classnames'

export default function AddWatermark() {
  const [imgUrl, setImg] = useState('')
  const [file, setFile] = useState<File>()
  const watermarkedImgContainer = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (file) {
      const watermarkobj = watermark([file])
      console.log(watermarkobj)
      watermarkobj
        .image(watermark.text.lowerRight('HaoJie', '64px san-serif', '#fff', 0.6))
        .then(function (img: HTMLImageElement) {
          watermarkedImgContainer.current!.appendChild(img)
        })
    }
    return () => {
      watermarkedImgContainer.current && (watermarkedImgContainer.current.innerHTML = '')
    }
  }, [file])
  return (
    <div className="pl-6">
      <label htmlFor="img-selector" className="btn btn-like">
        选择图片加水印
      </label>
      <input
        id="img-selector"
        type="file"
        hidden
        accept="image/png, image/jpg, image/jpeg"
        onChange={(e) => {
          e.persist()
          console.log(e.target.files)
          if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
          }
        }}
      />
      <div
        className={cn('flex space-x-4 mt-3', {
          hidden: !file
        })}
      >
        <div>
          <span className="text-sm text-neutral-800">原图</span>
          <div>{file && <img src={URL.createObjectURL(file)} />}</div>
        </div>
        <div>
          <span className="text-sm text-neutral-800">水印图</span>
          <div ref={watermarkedImgContainer} />
        </div>
      </div>
      {file && (
        <button
          className="btn mt-3"
          onClick={() => {
            if (file) {
              const a = document.createElement('a')
              a.href = URL.createObjectURL(file)
              a.download = 'watermarked.png'
              a.click()
              a.remove()
            }
          }}
        >
          点击下载水印图
        </button>
      )}
    </div>
  )
}
