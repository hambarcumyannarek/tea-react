import { ShopeHeader } from '../components/shopeHeader';
import { ShopeCenter } from '../components/shopeCenter';
import '../pages/css/shope.css';

export function Shope({state, callback}) {
    return (
        <>
            <ShopeHeader />
            <ShopeCenter state={state} callback={callback}/>
        </>
    )
}