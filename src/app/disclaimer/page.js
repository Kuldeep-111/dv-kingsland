import Link from "next/link";

const Disclaimer = () => {
    return (
      <div
        className="container mx-auto "
        style={{ marginTop: '2%', border: '1px solid #333' }}
      >
        <div
          style={{
            margin: 'auto',
            font: 'normal 13px Arial',
            padding: '30px',
          }}
        >
          <h2 style={{ textAlign: 'center', fontSize: '20px' }}>
            Disclaimer & Privacy Policy
          </h2>
  
          <p style={{ paddingTop: '10px', textAlign: 'justify', lineHeight: '24px' }}>
            <b style={{  fontSize: '15px' }}>Disclaimer: </b>
            The images shown herein are artistic impressions/ stock images and are only for representational purposes and are indicative in nature. The final specifications of the project shall be as per the agreement executed between the parties. The RERA official website is <Link className="text-[#705118]" href="https://rera.odisha.gov.in/" target="_blank">https://www.rera.odisha.gov.in/</Link>. Project RERA Registration Number: MP/19/2023/01042. *Use of sports and community facilities shall be subject to payment of charges and other terms and conditions. Not a site photograph. Only an artistic impression. *Map is for representational purposes only. Distances sourced from Google maps. Actual distances may vary. Terms & Conditions Apply.
            <br />
            Promoter: M/S Paramitra SmartInfra Sna Pvt. Ltd.
            <br/>
            (A Group Company of DN Homes Pvt. Ltd.)
          </p>
  
          <p style={{ paddingTop: '10px', textAlign: 'justify', lineHeight: '24px' }}>
            <b style={{ fontSize: '15px' }}>Privacy Policy: </b>
            In our endeavour and commitment to protecting your personal information, we have designed this comprehensive privacy policy.
          </p>
  
          {/* <p style={{ paddingTop: '10px', textAlign: 'justify', lineHeight: '24px' }}>
            <b >Updating privacy policy: </b>
            This privacy policy is subject to change and review without any prior notice.
          </p>
  
          <p style={{ paddingTop: '10px', textAlign: 'justify', lineHeight: '24px' }}>
            <b >User information: </b>
            By using our website, You agree to abide by the rules we have laid out and consent to the collection and use of all such information.
          </p>
  
          <p style={{ paddingTop: '10px', textAlign: 'justify', lineHeight: '24px' }}>
            <b >Security: </b>
            To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted.
          </p> */}
        </div>
  
      
      </div>
    );
  };
  
  export default Disclaimer;
  