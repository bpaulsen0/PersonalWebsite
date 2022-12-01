import Head from 'next/head'
import styles from '../styles/schedule.module.css'
import * as React from 'react';

export default function lodging() {
  return (
    <div>
      <Head>
        <title>Where and When</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/oie_png.png" />
      </Head>
      <a className={styles.back} href='/'>⊲Back to Homepage</a>
      <div className={styles.content}>
        <h1 className={styles.title}>Schedule</h1>
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/517+9th+Ave+W,+Ashland,+WI+54806/@46.5839694,-90.8906352,17z/data=!3m1!4b1!4m5!3m4!1s0x52a9141bebb1de99:0x59592d02cd2d8aa5!8m2!3d46.5839694!4d-90.8906352"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            
            <div>
              <h2>Ceremony : 2:00 pm at Saron Lutheran Church</h2>
              <p>The ceremony will be at the Saron Lutheran Church starting at 2 o'Clock. Please arrive at 1:30pm so you can find a seat. You will find the church at 517 9th Ave. West, Ashland WI 54806. Click here to be directed to this destination on google maps.</p>
            </div><img className={styles.img} src="/church.jpg"></img>
          </a>
        </div>
        <h2>Reception</h2>
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/The+Local+Bar+%26+Grille/@46.5713374,-90.9167568,15z/data=!4m5!3m4!1s0x0:0x2e9409dda935516b!8m2!3d46.5713374!4d-90.9167568"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <div>
              <h2>Cocktail Hour : 3:30 pm at The Local Bar & Grille</h2>
              <p>fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd </p>
            </div>
            <img className={styles.img} src="/local.jpg"></img>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/The+Local+Bar+%26+Grille/@46.5713374,-90.9167568,15z/data=!4m5!3m4!1s0x0:0x2e9409dda935516b!8m2!3d46.5713374!4d-90.9167568"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <div>
              <h2>Dinner Opens : 5:30 pm at The Local Bar & Grille</h2>
              <p>fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd </p>
            </div>
            {/* <img className={styles.img} src="/local.jpg"></img> */}
          </a>
        </div>
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/The+Local+Bar+%26+Grille/@46.5713374,-90.9167568,15z/data=!4m5!3m4!1s0x0:0x2e9409dda935516b!8m2!3d46.5713374!4d-90.9167568"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <div>
              <h2>Speeches and Dancing : 7:00 pm at The Local Bar & Grille</h2>
              <p>fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd </p>
            </div>
            {/* <img className={styles.img} src="/lodging/qualityinn.jpg"></img> */}
          </a>
        </div>
        <div className={styles.grid}>
          <a
            href="https://www.google.com/maps/place/The+Local+Bar+%26+Grille/@46.5713374,-90.9167568,15z/data=!4m5!3m4!1s0x0:0x2e9409dda935516b!8m2!3d46.5713374!4d-90.9167568"
            target='_blank' rel='noopener noreferrer'
            className={styles.card}
          >
            <div>
              <h2>End of Reception and Closing Time : 11:00 pm at The Local Bar & Grille</h2>
              <p>fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd fasdfa sdfasd </p>
            </div>
            {/* <img className={styles.img} src="/lodging/qualityinn.jpg"></img> */}
          </a>
        </div>
      </div>
    </div>
  );
}

// Black Cat        https://blackcatashland.com/
// Ashland Cinema   http://www.ashlandbaycinema.com/
// Houghton Point   https://www.google.com/maps/place/Houghton+Point/@46.6985625,-90.8617169,15z/data=!3m1!4b1!4m5!3m4!1s0x52a91a4f033e8c03:0x1b589ab84558e2a8!8m2!3d46.6985487!4d-90.8529621
// Ashwabay         https://www.google.com/maps/place/Mt+Ashwabay+Ski+and+Recreation+Area/@46.7763496,-90.8931916,13.58z/data=!4m5!3m4!1s0x52a91e86044109f9:0xb011f73ec5926153!8m2!3d46.7772179!4d-90.8945541
//

//https://www.wyndhamhotels.com/americinn/ashland-wisconsin/americinn-ashland/overview?CID=LC:AA::GGL:RIO:National:52038&iata=00093796