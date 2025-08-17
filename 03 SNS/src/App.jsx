import React from 'react'
import Feed from './components/Feed'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="logo">Instagram</h1>
          <div className="header-icons">
            <svg aria-label="홈" className="header-icon" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <svg aria-label="메시지" className="header-icon" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M12.003 2.001a9.93 9.93 0 1 0 9.937 9.937c0 5.523-4.48 10-10 10a9.93 9.93 0 0 1-5.27-1.521L2.5 22l1.52-4.233A9.93 9.93 0 0 1 2.003 12a10 10 0 0 1 10-10Zm0 17.999a8.002 8.002 0 0 0 8.008-8.008 8.002 8.002 0 1 0-8.008 8.008Z" fill="currentColor"></path>
            </svg>
            <svg aria-label="새 게시물" className="header-icon" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
            </svg>
            <svg aria-label="활동 피드" className="header-icon" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.21 4.21 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.395 7.29.42.178.79.315 1.105.42a6.58 6.58 0 0 0 1.88.52c.312.05.612.075.72.075s.408-.025.72-.075a6.58 6.58 0 0 0 1.88-.52 5.99 5.99 0 0 0 1.105-.42c2.845-1.463 5.395-3.68 5.395-7.29 0-3.27-2.214-5.936-5.207-5.936Z" fill="currentColor"></path>
            </svg>
            <div className="profile-icon">
              <img src="/man.png" alt="프로필" className="profile-icon-img" />
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        <Feed />
      </main>
    </div>
  )
}

export default App
