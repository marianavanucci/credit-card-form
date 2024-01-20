

import Image from 'next/image'

const CardInput = () => {

  const styles = {
    container: "bg-white flex flex-col items-center w-[375px]",
    cardContainer: " bg-bg-main-mobile w-[375px] h-72",
    cardBack: " ml-20 mt-8 h-0",
    cardFront:" ml-4 mt-[90px] mb-12 ",
    dataContainer: " w-[340px] bg-cyan-300 mt-10 ml-[3px]",
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


  }

  return (
    <>
      <div className={styles.container}>
        <div class={styles.cardContainer}>
          <div className={styles.cardBack}>
            <Image src="/images/bg-card-back.png" width="280" height="280"></Image>
          </div>
          <div className={styles.cardFront}>
            <Image src="/images/bg-card-front.png" width="280" height="280"></Image>
          </div>
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.nameContainer}>
            <label className={styles.nameLabel}>CARDHOLDER NAME</label>
            <input className={styles.nameInput} type="text" placeholder='e.g. Jane Appleseed' />
          </div>  
          <div className={styles.numberContainer}>
            <label className={styles.numberLabel}>CARD NUMBER</label>
            <input  className={styles.numberInput} type="text" placeholder='e.g. 1234 5678 9123 0000' />
          </div>
          <div  className={styles.mixtedContainer}>
            <div>
              <label className={styles.dateLabel}>EXP. DATE (MM/YY)</label>
              <div className={styles.monthYearContainer} >
                <input className={styles.monthInput} type="text" placeholder='MM' />
                <input className={styles.yearInput} type="text" placeholder='YY' />
              </div>
          </div>
            <div  className={styles.cvcContainer}>
              <label  className={styles.cvcLabel}>CVC</label>
              <input  className={styles.cvcInput} type="text" placeholder='e.g. 123' />
            </div>
          </div>
          <button className={styles.submitButton} type='submit'>Confirm</button>
        </div>
      </div>
    
    </>
  )
}

export default CardInput