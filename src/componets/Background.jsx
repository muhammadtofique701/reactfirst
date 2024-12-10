import back from './images/image.jpg';  // Import the image correctly

function Background() {
    return (
        <>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <img src={back} style={{ width: '100%', height: 'auto' }} alt="Background" />

           <div style={{ position: 'absolute', color: 'white', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
               <p>Welcome To Your Doc</p>
                <h1>We are here<br />for your Care</h1>
                
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis tempore delectus dignissimos 
                    <br />voluptas rerum ab tenetur alias sit voluptate! Commodi quisquam dolorum voluptatem
                    <br />dicta quasi distinctio voluptatum cum optio iusto numquam, earum praesentium
                    <br />esse dicta tenetur architecto adipisci dolor porro consectetur tempore,</h6> 
                    <button type="button" className="btn btn-primary btn-lg">Make an appointment</button>
                </div>
            </div>
        </>
    );
}

export default Background;
