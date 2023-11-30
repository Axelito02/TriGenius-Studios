import React from 'react'
import { Link } from 'react-router-dom'
import './CreateProject.css'
import { Collaborators, InfoProject } from '../../subcomponentes'

export function CreateProject () {
  return (
    <>
      <div className='ContainerCreateProject flex flex-col sm:flex-row w-screen p-5 items-center'>
        <div className='InfoProjectContainer sm:w-1/2'>
          <InfoProject />
        </div>
        <div className='imgProjectContainer sm:w-1/2'>
            <div className='ImageCoverProject'>
                <label for='inputImageCover'>Cover image</label>
                <input type="url" placeholder='URL of project cover' className='inputImageCover' id='inputImageCover' />
            </div>
            <div className='ImagePreviewProject'>
                <label for='inputImagePreview1'>Preview image 1</label>
                <input type="url" placeholder='URL of the preview image' className='inputImagePreview1' id='inputImagePreview1' />
            </div>
            <div className='ImagePreviewProject'>
                <label for='inputImagePreview2'>Preview image 2</label>
                <input type="url" placeholder='URL of the preview image' className='inputImagePreview2' id='inputImagePreview2' />
            </div>
            <div className='collaboratorProject'>
            <label>Collaborators</label>
            <div className='collaborators'>
              <Collaborators />
              <Collaborators />
              <Collaborators />
            </div>
          </div>
        </div>
      </div>
      <div className='btnActions'>
        <button className='btnCancel' href="/dashboard"><Link to='/dashboard'>Cancel</Link></button>
        <button className='btnSave'><Link to='/dashboard'>Save</Link></button>
        <button className='btnDelete'><Link to='/dashboard'>Delete</Link></button>
      </div>
    </>
  )
}