import Accordion from './Accordion';

const data = [
  {
    "header": "Section one",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?"
  },
  {
    "header": "Section two",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?"
  },
  {
    "header": "Section three",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?"
  },
  {
    "header": "Section four",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?"
  },
]

function App() {
  return (
    <>
      <div className="accordion-container">
        <Accordion data={data} />
      </div>
    </>
  );
}

export default App;

