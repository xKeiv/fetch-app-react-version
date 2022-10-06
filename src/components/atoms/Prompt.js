import React from 'react'

const Prompt = () => {
  return (
    <div>
        <div style={promptStyle}> User 1</div>
        <div style={promptStyle2}> User 2</div>
        <div style={promptStyle}> User 3</div>
        <div style={promptStyle2}> User 4</div>
    </div>
    
  )
}

const promptStyle = {
    backgroundColor: '#2B2B2B',
    fontSize: '13px',
    maxWidth: '171px',
    color: '#FFFFFF',
    border: 'solid #1F1F1F 1px',
    marginBottom: '2px',
    padding: '2px',
}

const promptStyle2 = {
    backgroundColor: '#1F1F1F',
    fontSize: '13px',
    maxWidth: '171px',
    color: '#FFFFFF',
    border: 'solid #1B1C1E 1px',
    marginBottom: '2px',
    padding: '2px',
}
export default Prompt