"use client"
import Image from 'next/image'

import { useState } from 'react'

import CardInput from '../../components/CardInput'




export default function Home() {
  const styles = {
    container: "bg-white flex flex-col items-center w-[375px]",
    cardContainer: " bg-bg-main-mobile w-[375px] h-[240px]",
    dataContainer: " w-[340px] bg-white mt-24 ml-[3px]",
    nameContainer: " flex flex-col ",
    nameLabel: " text-[12px] font-medium tracking-widest",
    nameInput: " border px-4 py-2 w-[340px] rounded-lg ",
    numberContainer: " flex flex-col ",
    numberLabel: "text-[12px] font-medium tracking-widest",
    numberInput: "border px-4 py-2 w-[340px] rounded-lg ",
    mixtedContainer: " flex flex-row gap-3 items-center",
    dateLabel: " text-[12px] font-medium tracking-widest",
    monthYearContainer: " flex justify-between",
    monthInput:" border px-4 py-2 w-[60px] rounded-lg ",
    yearInput:" border px-4 py-2 w-[60px] rounded-lg ",
    cvcContainer:  "flex flex-col",
    cvcLabel: " text-[12px] font-medium tracking-widest my-1",
    cvcInput: " border px-4 py-2 rounded-lg w-[200px] ",
    submitButton: "bg-brand-300 text-white text-lg tracking-widest py-2 w-full rounded-lg mt-8 mb-12",
    cardPosition: "absolute",
    cardBack: " relative left-[50px] bottom-[610px] h-0",
    cardFront:" relative left-[-2px] bottom-[520px] h-0",
    cvcResult: " text-white font-medium text-[10px] relative left-[280px] bottom-[540px]",
    ball: " bg-white w-8 h-8 rounded-full relative left-[15px] bottom-[515px]",
    circle: "text-white relative left-[55px] bottom-[540px]",
    numberResult: "text-white text-[19px]  relative left-[22px] bottom-[510px] tracking-widest",
    nameResult: "text-white text-[10px] relative left-[22px] bottom-[500px] tracking-widest",
    dateResult: "text-white text-[10px] relative left-[230px] bottom-[515px] tracking-widest",

  }

  const [name, setName] = useState("JANE APPLESEED")
  const [number, setNumber] = useState("0000 0000 0000 0000")
  const [month, setMonth] = useState("00")
  const [year, setYear] = useState("00")
  const [cvc, setCvc] = useState("0 0 0")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return
    console.log("cancelei envio automático do form", name)
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div class={styles.cardContainer}>
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.nameContainer}>
            <label className={styles.nameLabel}>CARDHOLDER NAME</label>
            <input className={styles.nameInput} type="text" placeholder='e.g. Jane Appleseed' value={name} onChange={(e) => setName(e.target.value)} />
          </div>  
          <div className={styles.numberContainer}>
            <label className={styles.numberLabel}>CARD NUMBER</label>
            <input  className={styles.numberInput} type="text" placeholder='e.g. 1234 5678 9123 0000' value={number} onChange={(e) => setNumber(e.target.value)} />
          </div>
          <div  className={styles.mixtedContainer}>
            <div>
              <label className={styles.dateLabel}>EXP. DATE (MM/YY)</label>
              <div className={styles.monthYearContainer} >
                <input className={styles.monthInput} type="text" placeholder='MM' value={month} onChange={(e) => setMonth(e.target.value)} />
                <input className={styles.yearInput} type="text" placeholder='YY' value={year} onChange={(e) => setYear(e.target.value)}/>
              </div>
          </div>
            <div  className={styles.cvcContainer}>
              <label  className={styles.cvcLabel}>CVC</label>
              <input  className={styles.cvcInput} type="text" placeholder='e.g. 123' value={cvc} onChange={(e) => setCvc(e.target.value)} />
            </div>
          </div>
          <button className={styles.submitButton} type='submit'>Confirm</button>
          <div className=' absolute'>
          <div className={styles.cardBack}>
            <Image src="/images/bg-card-back.png" width="290" height="300" alt="back card"></Image>
          </div>
          <div className={styles.cardFront}>
            <Image src="/images/bg-card-front.png" width="290" height="310" alt="front card"></Image>
          </div>
          </div>
        <div className={styles.cardPosition}>
            <p className={styles.cvcResult}>{cvc}</p>
            <p className={styles.ball} ></p>
            <p className={styles.circle}>〇</p>
            <p className={styles.numberResult}>{number}</p>
            <p className={styles.nameResult}>{name}</p>
            <p className={styles.dateResult}>{month}/{year}</p>
        </div>
        </div>
      </form>
    
    </>
  )
}
