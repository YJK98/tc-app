import { useState } from 'react'
import Head from 'next/head'
import Thermocouple from 'thermocouple'
import { VechaiProvider, Button, Input, Spinner } from "@vechaiui/react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const TtomVWithRef = (TCtype, refT, reqT) => {
  return Thermocouple.tempToMillivolts(TCtype, reqT) - Thermocouple.tempToMillivolts(TCtype, refT)
}

export default function Home() {
  const [TCmV, setTCmV] = useState(0.01)
  const [TCC, setTCC] = useState(25)
  const [refT, setRefT] = useState(25)

  return (


    <div className={styles.container}>
      <Head>
        <title>🌡tc conv</title>
        <meta name="Thermocouple convertor application" content="Generated by create next app, useful for thermocouple calibration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h3 className={styles.title}>
          Hi and Welcome
        </h3> */}

        <header style={{position: 'fixed', top: 0, background: '#232323', width: '100%', padding: '5px'}}><p> 🤒 Ref Temp: <Input type="number" step="0.1" className={styles.inputN} value={refT} onChange={e => setRefT(e.target.value)} />⁰C</p></header>
<br/><br/>
        <p className={styles.title}>
          mV ↔ ⁰C
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div style={{ background: '#F2F4F6', color: '#232323' }}><b>J</b></div>
            <p>-190 ⁰C: {TtomVWithRef('j', refT, -190)} mV</p>
            <p>600 ⁰C: {TtomVWithRef('j', refT, 600)} mV</p>
            <p>1150 ⁰C: {TtomVWithRef('j', refT, 1150)} mV</p>

            <div style={{ background: '#F2F4F6', color: '#232323' }}><b>K</b></div>
            <p>-190 ⁰C: {TtomVWithRef('k', refT, -190)} mV</p>
            <p>700 ⁰C: {TtomVWithRef('k', refT, 700)} mV</p>
            <p>1350 ⁰C: {TtomVWithRef('k', refT, 1350)} mV</p>

            <div style={{ background: '#F2F4F6', color: '#232323' }}><b>T</b></div>
            <p>-190 ⁰C: {TtomVWithRef('t', refT, -190)} mV</p>
            <p>5 ⁰C: {TtomVWithRef('t', refT, 5)} mV</p>
            <p>360 ⁰C: {TtomVWithRef('t', refT, 360)} mV</p>

            <div style={{ background: '#F2F4F6', color: '#232323' }}><b>E</b></div>
            <p>-190 ⁰C: {TtomVWithRef('e', refT, -190)} mV</p>
            <p>500 ⁰C: {TtomVWithRef('e', refT, 500)} mV</p>
            <p>950 ⁰C: {TtomVWithRef('e', refT, 950)} mV</p>

            <div style={{ background: '#F2F4F6', color: '#232323' }}><b>R</b></div>
            <p>5 ⁰C: {TtomVWithRef('r', refT, 5)} mV</p>
            <p>800 ⁰C: {TtomVWithRef('r', refT, 800)} mV</p>
            <p>1700 ⁰C: {TtomVWithRef('r', refT, 1700)} mV</p>

            <div style={{ background: '#F2F4F6', color: '#232323' }}><b>S</b></div>
            <p>5 ⁰C: {TtomVWithRef('s', refT, 5)} mV</p>
            <p>800 ⁰C: {TtomVWithRef('s', refT, 800)} mV</p>
            <p>1700 ⁰C: {TtomVWithRef('s', refT, 1700)} mV</p>

            <div style={{ background: '#F2F4F6', color: '#232323' }}><b>B</b></div>
            <p>600 ⁰C: {TtomVWithRef('b', refT, 600)} mV</p>
            <p>1800 ⁰C: {TtomVWithRef('b', refT, 1800)} mV</p>
            {/* <p> ⁰C: {TtomVWithRef('b', refT, )} mV</p> */}

            <div style={{ background: '#F2F4F6', color: '#232323' }}><b>N</b></div>
            <p>5 ⁰C: {TtomVWithRef('n', refT, 5)} mV</p>
            <p>700 ⁰C: {TtomVWithRef('n', refT, 700)} mV</p>
            <p>1300 ⁰C: {TtomVWithRef('n', refT, 1300)} mV</p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2><Input className={styles.inputN} type="number" value={TCmV} onChange={e => setTCmV(e.target.value)} />mV &rarr;</h2>
            <p><b>B: </b> {Thermocouple.millivoltsToTemp('b', Number(TCmV))} ⁰C</p>
            <p><b>E: </b> {Thermocouple.millivoltsToTemp('e', Number(TCmV))} ⁰C</p>
            <p><b>J: </b> {Thermocouple.millivoltsToTemp('j', Number(TCmV))} ⁰C</p>
            <p><b>K: </b> {Thermocouple.millivoltsToTemp('k', Number(TCmV))} ⁰C</p>
            <p><b>N: </b> {Thermocouple.millivoltsToTemp('n', Number(TCmV))} ⁰C</p>
            <p><b>R: </b> {Thermocouple.millivoltsToTemp('r', Number(TCmV))} ⁰C</p>
            <p><b>S: </b> {Thermocouple.millivoltsToTemp('s', Number(TCmV))} ⁰C</p>
            <p><b>T: </b> {Thermocouple.millivoltsToTemp('t', Number(TCmV))} ⁰C</p>
          </div>

          <div className={styles.card}>
            <h2><Input className={styles.inputN} step="0.1" type="number" value={TCC} onChange={e => setTCC(e.target.value)} />⁰C &rarr;</h2>
            <p><b>B: </b> {Thermocouple.tempToMillivolts('b', Number(TCC))} mV</p>
            <p><b>E: </b> {Thermocouple.tempToMillivolts('e', Number(TCC))} mV</p>
            <p><b>J: </b> {Thermocouple.tempToMillivolts('j', Number(TCC))} mV</p>
            <p><b>K: </b> {Thermocouple.tempToMillivolts('k', Number(TCC))} mV</p>
            <p><b>N: </b> {Thermocouple.tempToMillivolts('n', Number(TCC))} mV</p>
            <p><b>R: </b> {Thermocouple.tempToMillivolts('r', Number(TCC))} mV</p>
            <p><b>S: </b> {Thermocouple.tempToMillivolts('s', Number(TCC))} mV</p>
            <p><b>T: </b> {Thermocouple.tempToMillivolts('t', Number(TCC))} mV</p>
          </div>
{/* 
          <div className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>

          <div className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </div> */}
        </div>
      </main>

      <footer className={styles.footer}>Made with 💖, <abbr title="Y. JASWANTH KUMAR" style="underline: none;">YJK</abbr></footer>
    </div>


  )
}
