import React from 'react'
import Post from './Post'
import './Feed.css'

const Feed = () => {
  // 피드 데이터 생성 (img01~10 사용)
  const posts = [
    {
      id: 1,
      username: 'user1',
      profileImage: 'man.png',
      image: 'img01.png',
      likes: 1234,
      caption: '오늘 날씨가 정말 좋네요! 🌞',
      comments: [
        { username: 'friend1', text: '정말 멋져요!' },
        { username: 'friend2', text: '좋아요!' }
      ],
      timestamp: '2시간 전'
    },
    {
      id: 2,
      username: 'user2',
      profileImage: 'woman.png',
      image: 'img02.jpg',
      likes: 567,
      caption: '새로운 시작 ✨',
      comments: [
        { username: 'friend3', text: '축하해요!' }
      ],
      timestamp: '5시간 전'
    },
    {
      id: 3,
      username: 'user3',
      profileImage: 'man.png',
      image: 'img03.jpg',
      likes: 890,
      caption: '맛있는 저녁 식사 🍽️',
      comments: [],
      timestamp: '1일 전'
    },
    {
      id: 4,
      username: 'user4',
      profileImage: 'woman.png',
      image: 'img04.png',
      likes: 2345,
      caption: '아름다운 풍경 🌄',
      comments: [
        { username: 'friend4', text: '어디인가요?' },
        { username: 'friend5', text: '너무 예뻐요!' }
      ],
      timestamp: '1일 전'
    },
    {
      id: 5,
      username: 'user5',
      profileImage: 'man.png',
      image: 'img05.jpg',
      likes: 432,
      caption: '오늘의 일상 📸',
      comments: [],
      timestamp: '2일 전'
    },
    {
      id: 6,
      username: 'user6',
      profileImage: 'woman.png',
      image: 'img06.jpg',
      likes: 1567,
      caption: '행복한 순간 😊',
      comments: [
        { username: 'friend6', text: '축하합니다!' }
      ],
      timestamp: '2일 전'
    },
    {
      id: 7,
      username: 'user7',
      profileImage: 'man.png',
      image: 'img07.jpg',
      likes: 789,
      caption: '새로운 도전 💪',
      comments: [],
      timestamp: '3일 전'
    },
    {
      id: 8,
      username: 'user8',
      profileImage: 'woman.png',
      image: 'img08.jpg',
      likes: 2100,
      caption: '여행의 추억 ✈️',
      comments: [
        { username: 'friend7', text: '부럽네요!' },
        { username: 'friend8', text: '다음엔 같이 가요!' }
      ],
      timestamp: '3일 전'
    },
    {
      id: 9,
      username: 'user9',
      profileImage: 'man.png',
      image: 'img09.jpg',
      likes: 654,
      caption: '평범한 하루 🌤️',
      comments: [],
      timestamp: '4일 전'
    },
    {
      id: 10,
      username: 'user10',
      profileImage: 'woman.png',
      image: 'img10.jpg',
      likes: 987,
      caption: '좋은 하루 보내세요! 💙',
      comments: [
        { username: 'friend9', text: '감사합니다!' }
      ],
      timestamp: '4일 전'
    }
  ]

  return (
    <div className="feed">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed
