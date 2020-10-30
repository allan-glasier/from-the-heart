import React from "react"
import Layout from "../layouts/Layout"
import Img from "gatsby-image"

export default function djChoreography({ data }) {
  return (
    <Layout>
      <div className="header header-dj">
        <div className="title-bar">
          <h1 className="text-center">World Class DJ & Choreography</h1>
        </div>
      </div>
      <div className="container my-5">
        <div>
          <p className="text-justify">
            You know, Bride and Grooms spend approximately 1-2 years planning a
            wedding; shopping for “THE” dress, picking out rings, deciding on
            which limo company to use or not to use, finding the perfect venue
            with great food, and the list goes on. Choosing your entertainment
            for the evening is one of the most important decisions you’ll have
            to make. So you’re at your reception now on Cloud 9 because you just
            finished your first dinner together as husband and wife, speeches
            are done and then 9pm hits. The music the DJ is playing doesn’t get
            or keep the party going, night’s over. (Poor choice in the DJ
            company hired). You know you’ve been to a wedding like that. This is
            Scenario 1. Now picture Scenario 2: If all the above was cut in half
            for whatever reasons, yet your dance floor was full all night and
            your guests are having a great time all because you hired Celebrity
            Music, you and your family and friends will remember your wedding
            for a lifetime. I can’t tell you how many times we’ve run into
            people over the years that say they still remember a wedding they
            were at 20 years ago where we DJ’d and what a great time they had
            and that they remember the dance floor being packed all night.
          </p>
          <div className="flex-item py-4">
            <Img
              className="img-shadow"
              fluid={data.image1.childImageSharp.fluid}
            />
          </div>
          <div>
            <div className="flex my-3">
              <p className="flex-item text-justify">
                A Disc Jockey should be a Master of Ceremonies, able to MC with
                proper pronunciation of names, know when and when not to speak,
                knowing how to feel the crowd. He/She should supply music while
                your guests are arriving for cocktail hour, during dinner and
                all the way to the end of the night. He/She should know the
                formula as to not lose anyone. This is where talent comes in.
                With Celebrity Music, we let our reviews and recommendations be
                our “wedding show” advertising. In our 30 years of business,
                “word of mouth” is our bread and butter. Our past couples
                understand our value that was given to their wedding. Setting up
                our equipment at noon to avoid any guest contact is just our
                professional way. Arriving half an hour before you arrive, we
                guarantee everything you dreamed of is in place and we’re ready
                to be at your service when you arrive. Proper dress code (ie: we
                wear tuxedos) is a must for all events.{" "}
              </p>
            </div>
            <div>
              <p className="flex-item text-justify">
                We are always in contact with the hall managers to make sure
                service does not interrupt with speeches during dinner. This
                does make a difference. Our background/dinner music is at a
                level where guests can actualy hold a conversation with someone
                at the table and our speakers are specifically positioned to
                make sure you can feel the music without any complaints. We also
                don’t believe that a chair should be provided for your DJ while
                working for you. I have never sat while working because I
                believe sitting looks like you’re bored and not enjoying
                yourself and that couldn’t be further from the truth with
                Celebrity Music. Entertaining your guests isn’t just my job,
                it’s my passion. We thrive on having your guests feel that we
                are working for them the entire night. Knowledge of music from
                all genres is extremely important to help maintain a lower
                liquor bill for you because we’ll keep your dance floor packed
                all night long. I can honestly say that I don’t know of many
                DJ’s where guests actually go out of their way when they leave
                to tell them what a wonderful time they had and how energetic
                and entertaining we were. It’s the highest compliment one can
                receive and it’s what keeps us going.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    image1: file(
      relativePath: { eq: "59C08A31-367A-4556-BE81-1E10F43279C7.jpeg" }
    ) {
      childImageSharp {
        fluid(jpegQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
