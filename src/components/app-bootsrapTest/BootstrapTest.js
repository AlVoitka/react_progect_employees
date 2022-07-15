import Accordion from 'react-bootstrap/Accordion';

const BootstrapTest = () => {

    return(
        
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>My name</Accordion.Header>
                <Accordion.Body>
                Hi, a'm Alex.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Surename</Accordion.Header>
                <Accordion.Body>
                Voitka
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
       
        
    )
}

export default BootstrapTest;