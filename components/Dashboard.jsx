'use client';

import { useState } from 'react';
import '../styles/main.css';

export default function Dashboard(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  async function handleLogin(){

    const res = await fetch('/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if(data.success){
      setUser(data.user);
      setMessage('Login berhasil');
    }else{
      setMessage(data.message);
    }

  }


  return (
    <main className="container">

      <header>
        <h1>LMS Laboratorium Virtual Momentum dan Impuls</h1>
        <p>Media pembelajaran virtual berbasis web untuk praktikum fisika interaktif.</p>
      </header>


      <section className="card">
        <h2>Selamat datang, {user ? user.nama : 'Siswa'}</h2>
        <button>
          Mulai Praktikum Virtual
        </button>
      </section>


      <section className="grid">

        <div className="card">
          <h3>Materi</h3>
          <p>Momentum, impuls, dan hukum kekekalan momentum.</p>
        </div>

        <div className="card">
          <h3>Simulasi 3D</h3>
          <p>Terintegrasi Babylon.js untuk visualisasi laboratorium virtual.</p>
        </div>

        <div className="card">
          <h3>Kuis & Evaluasi</h3>
          <p>Nilai dan aktivitas siswa tersimpan otomatis.</p>
        </div>

      </section>


      <section className="card">

        <h3>Login Siswa</h3>

        <input 
          placeholder="Email siswa"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input 
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Masuk
        </button>

        <p>{message}</p>

      </section>


    </main>
  )
}
