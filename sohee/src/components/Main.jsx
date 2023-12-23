import InputPrice from '../components/InputPrice';
import '../styles/Main.scss';
import Active from '../assets/Active.png';

const Main = () => {
  return (
        <>
            <InputPrice/>
            <div className="main-container">
                <div className='horizontal-row'> 
                    <h1 className="total-count">전체 내역 건</h1>
                    <img
                        className='active-image'
                        src={Active}
                        alt='active-icon'
                    />
                    <h1 className="active-content">수입</h1>
                    <img
                        className='active-image'
                        src={Active}
                        alt='active-icon'
                    />
                    <h1 className="active-content">지출</h1>
                </div>
            </div>
        </>
  )
}

export default Main;
