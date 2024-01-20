import Image from 'next/image'




export default function Home() {

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
          <div  className=' flex flex-row gap-3 items-center'>
            <div>
              <label className=' text-[12px] font-medium tracking-widest my-1'>EXP. DATE (MM/YY)</label>
              <div className=' flex justify-between' >
                <input className=' border px-4 py-2 w-[60px] rounded-lg ' type="text" placeholder='MM' />
                <input className=' border px-4 py-2 w-[60px] rounded-lg ' type="text" placeholder='YY' />
              </div>
          </div>
            <div  className=' flex flex-col'>
              <label  className=' text-[12px] font-medium tracking-widest my-1'>CVC</label>
              <input  className=' border px-4 py-2 rounded-lg w-[200px] ' type="text" placeholder='e.g. 123' />
            </div>
          </div>
          <button className=' bg-brand-300 text-white text-lg tracking-widest py-2 w-full rounded-lg mt-8 mb-12' type='submit'>Confirm</button>
        </div>
      </div>
    
    </>
  )
}
