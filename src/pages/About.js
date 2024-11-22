import { Link } from "react-router-dom";
import Image from "../components/Image";

function About() {
  return (
    <div className="container px-3 sm:px-12 lg:px-60 md:px-28 py-3 lg:py-10">
      <figure>
        <Image
          path="about/charlane_yu_makeup_artist_self_at_work_4.jpeg"
          alt="Charlane Yu drawing makeup with a brush on a bride"
        />
        <figcaption>
          Photo credit:{" "}
          <a href="https://www.instagram.com/superpandapresents/">
            @superpandapresents
          </a>
        </figcaption>
      </figure>

      <h1>
        Hey! I'm Charlane Yu, a professional makeup artist from Singapore
        currently based in Düsseldorf, Germany.
      </h1>

      <p>
        People say, "do what you love and you will never have to work again."
        I'd always felt that that was unrealistic until I finally became a
        makeup artist.
      </p>
      <p>
        Having been raised in a traditional family, I was expected to do well in
        school, and I worked very hard to meet that expectation. I made my
        parents really happy when I presented to them my job offer from NUS as a
        researcher. I had made it! During my spare time, though, I was dolling
        up friends for their special events and occasionally some of them would
        joke about how I should consider switching careers.
      </p>
      <p>
        In late 2015, I finally took the plunge. I started my journey to
        becoming a full-time professional bridal makeup artist.
      </p>
      <p>
        I like working with brides because every wedding is magical in its
        unique way, and I love experiencing that. It is always an honour to be
        part of something so important.
      </p>
      <p>
        I prefer clean and light makeup with careful attention to details on eye
        adjustment and enhancement to bring out the beauty of each bride. I want
        romance to show through the bridal hairstyles that I create. Every
        hairdo is unique in its own way as I cater to each bride's style and
        preferences.
      </p>
      <p>
        I enjoy chatting with and listening to my brides to understand their
        unique needs. I do this before and during our makeup session. I believe
        alignment between you and me is crucial, in terms of what looks you
        prefer and whether you have any special requests, to creating great
        makeup and hairstyling.
      </p>
      <p>
        I'm constantly improving my professional skills and knowledge through
        courses and experience in the field so you can trust to always be
        getting my best work yet!
      </p>
      <p>
        Thank you for reading and considering my service.&nbsp;I give my
        sincerest blessings to you on your big day!
      </p>
      <p className="text-center">* * *</p>
      <p>
        I'm currently accepting makeup and hairstyling jobs for{" "}
        <strong>destination photoshoots and weddings in Europe</strong>.
      </p>
      <p>
        If you are looking for someone experienced in doing makeup and
        hairstyling for Asian brides and who is based in Europe, I may just be
        who you're looking for. Get in touch with me on{" "}
        <a href="https://www.instagram.com/charlane_yu/">Instagram</a>{" "}
        (preferred) or the <Link to="/contact">contact form</Link>. Talk to you
        soon!
      </p>
    </div>
  );
}

export default About;
