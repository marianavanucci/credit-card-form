import Image from 'next/image'




export default function Home() {

  const styles = {
    container: "bg-lime-300 flex flex-col items-center"
  }

  return (
    <>
    <div className={styles.container}>
      <div class=" bg-bg-main-mobile w-96">
        <div>
          <Image src="/images/bg-card-back.png" width="280" height="280"></Image>
        </div>
      </div>
      <div>
      <Image src="/images/bg-card-front.png" width="280" height="280"></Image>
        <div>
          <label htmlFor="">CARDHOLDER NAME</label>
          <input type="text" placeholder='e.g. Jane Appleseed' />
        </div>
        <div>
          <label htmlFor="">CARD NUMBER</label>
          <input type="text" placeholder='e.g. 1234 5678 9123 0000' />
        </div>
        <div>
          <div>
            <label htmlFor="">EXP. DATE (MM/YY)</label>
            <input type="text" placeholder='MM' />
            <input type="text" placeholder='YY' />
          </div>
          <div>
            <label htmlFor="">CVC</label>
            <input type="text" placeholder='e.g. 123' />
          </div>
        </div>
        <button type='submit'>Confirm</button>
      </div>
    </div>
    
    </>
  )
}
