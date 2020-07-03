var ListGroup = ReactBootstrap.ListGroup
var Spinner = ReactBootstrap.Spinner
var Alert = ReactBootstrap.Alert
var Container = ReactBootstrap.Container
var Nav = ReactBootstrap.Nav
var Card = ReactBootstrap.Card
var Row = ReactBootstrap.Row
var Col = ReactBootstrap.Col

const Header = (props) => {
   const menuItems = [
       'All',
       'Javascript',
       'Ruby',
       'Java',
       'Css',
       'Python'
   ]  
    return (<div>
    <Container>
       <Nav>
           {menuItems.map((item, key) => <Nav.Item key={key}><Nav.Link>{item}</Nav.Link></Nav.Item>)}
       </Nav>
    </Container>
</div>)
}
const Content = (props) =>(
    <div>
        <Container>
        {props.children}
        </Container>
    </div>
)

const Footer = (props) => (
    <div>
        <Container>
            {props.children}
        </Container>
    </div>
)

const RepoCard = (props) => (
    <Card border="primary">
        <Card.Header>{props.no}</Card.Header>
        <Card.Body>
            <Card.Img src={props.img} />
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.author}</Card.Text>
            <Card.Text>{props.stars}</Card.Text>
            <Card.Text>{props.forks}</Card.Text>
            <Card.Text>{props.issues}</Card.Text>
        </Card.Body>
    </Card>
)
const App = (props) => (<div style={{display: 'flex', flexDirection: 'column', minHeight: '200px'}}>
    <div className="container">
        <Header>
        </Header>
        <Content>
            <Row>
                <Col sm={3}>
                <RepoCard no='#1' img="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3194785065,2900047582&fm=26&gp=0.jpg"
            title="freeCodeCamp" author="freeCode" stars="305930" forks="23087" issues="370" />
                </Col>
                <Col sm={3}>
                <RepoCard no='#1' img="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3194785065,2900047582&fm=26&gp=0.jpg"
            title="freeCodeCamp" author="freeCode" stars="305930" forks="23087" issues="370" />
                </Col>
                <Col sm={3}>
                <RepoCard no='#1' img="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3194785065,2900047582&fm=26&gp=0.jpg"
            title="freeCodeCamp" author="freeCode" stars="305930" forks="23087" issues="370" />
                </Col>
                <Col sm={3}>
                <RepoCard no='#1' img="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3194785065,2900047582&fm=26&gp=0.jpg"
            title="freeCodeCamp" author="freeCode" stars="305930" forks="23087" issues="370" />
                </Col>
                <Col sm={3}>
                <RepoCard no='#1' img="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3194785065,2900047582&fm=26&gp=0.jpg"
            title="freeCodeCamp" author="freeCode" stars="305930" forks="23087" issues="370" />
                </Col>
            </Row>
        </Content>
        <Footer>
            版权所有 &copy; 蔡国城
        </Footer>
    </div>
</div>)
 ReactDOM.render(
    <App />,
    document.getElementById('container')
);