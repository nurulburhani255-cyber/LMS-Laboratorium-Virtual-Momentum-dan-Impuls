'use client';
import {useState} from 'react';
import '../styles/main.css';
export default function Dashboard(){
 const [user,setUser]=useState('Siswa');
 return <main className="container">
 <header><h1>LMS Laboratorium Virtual Momentum dan Impuls</h1><p>Media pembelajaran virtual berbasis web untuk praktikum fisika interaktif.</p></header>
 <section className="card"><h2>Selamat datang, {user}</h2><button>Mulai Praktikum Virtual</button></section>
 <section className="grid"><div className="card"><h3>Materi</h3><p>Momentum, impuls, dan hukum kekekalan momentum.</p></div><div className="card"><h3>Simulasi 3D</h3><p>Terintegrasi Babylon.js untuk visualisasi laboratorium virtual.</p></div><div className="card"><h3>Kuis & Evaluasi</h3><p>Nilai dan aktivitas siswa tersimpan otomatis.</p></div></section>
 <section className="card"><h3>Login Siswa</h3><input placeholder="Email siswa"/><input placeholder="Password"/><button>Masuk</button></section>
 </main>
}
