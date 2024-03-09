import Carousel from 'react-bootstrap/Carousel';
import MyCarouselImage from '../MycarouselImage/MycarouselImage';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <MyCarouselImage src="https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/385047996_1149835606078782_2950187936067094610_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGSXLdr09o7Xxjhzi88zjHUOy4F9I3-Fhw7LgX0jf4WHKuVaSakzOoJEGLX5vMF6wY51jmYW_b9JHk-kiNplhrb&_nc_ohc=d9AY3lWL3fAAX-03Lua&_nc_ht=scontent.fbog4-2.fna&oh=00_AfAwINguPfTzmyE4-UYh9PvpNh06hxnieGo46GJfU93rdA&oe=65E90CA9" alt="Amigururi 1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <MyCarouselImage scr="https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/371821927_1128140958248247_3058065878300716346_n.jpg?stp=dst-jpg_p600x600&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEp6sgO0vyR1gh5-6gKXAL9F9FU7N0QhxkX0VTs3RCHGUoDGCtFJ9yCDPLMjDvty41qY8xvlrGPAg_N8inQja21&_nc_ohc=l-Pynf2-vgQAX-lwT_S&_nc_ht=scontent.fbog4-1.fna&oh=00_AfBG5280kw-WLkSbsTXr3AhEpqS1SIOHFxfbAH1f_CINXQ&oe=65E8FF43" alt="Amigurumi 2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MyCarouselImage scr="https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/355070991_1059375548458122_8420402802960753013_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFXH8o57LLdgaaoWManfu46BTDyztVogLQFMPLO1WiAtFb-Zv6YNbBVqRvm1eiViwattl-UOHCkQUeBiLdTX0n3&_nc_ohc=suDukzG1l2YAX-EOd_h&_nc_ht=scontent.fbog4-1.fna&oh=00_AfCaFo8rROW7YDjcZLDK27gg8Qb7l1eSUz3C6bnC1VNUaA&oe=65E81D5E" alt="Amigurumi 3" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;