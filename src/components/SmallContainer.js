import Qr from './Qr'
import BigText from './BigText'
import SmallText from './SmallText'


function SmallContainer() {
    return (
      <div className='Smallcontainer'>
        <Qr />
        <BigText />
        <SmallText />
      </div>
    );
}

export default SmallContainer;
