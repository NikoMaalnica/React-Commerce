import Spinner from 'react-bootstrap/Spinner';

function spinner() {
    return (
    <Spinner animation="border" variant="light" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
    );
}

export default spinner;