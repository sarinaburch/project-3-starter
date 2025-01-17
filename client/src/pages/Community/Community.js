import React, { Component, useEffect } from "react";
import { Link } from 'react-router-dom';
import API from '../../lib/API'

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      title: '',
      userName: '',
      forumPosts: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getLatestPosts = () => {
    API.Forum.getForum()
      .then(results => this.setState({ forumPosts: results.data }))
  }
  componentDidMount() {
    this.getLatestPosts()
  }
  handleChange(e) {
    this.setState({ comment: e.target.value });
    console.log(this.state.comment)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('commented' + this.state.comment)
    if (this.state.title && this.state.userName && this.state.comment) {

      API.Forum.createForum({
        title: this.state.title,
        post: this.state.comment,
        author: this.state.userName
      }).then(results => {
        console.log(results)
        this.getLatestPosts()
      })
      this.setState({ comment: "" })
    }
  }


  render() {
    return (
      <div>
        <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
          <div className="column is-narrow" >
          </div>
          <div className="column">
            <h1 style={styles.h1}>Community Forum</h1> <hr style={styles.hr} />
            <article className="media" style={styles.forumBody, styles.commentPost}>
            
              <figure className="media-left" style={styles.forumLeft}>
                <p className="image is-64x64">
                  <img src="https://randomuser.me/api/portraits/women/24.jpg" />
                </p>
              </figure>
              <div className="media-content" style={styles.forum}>
                <div className="content">

                  <p style={styles.forumHead}>
                    <strong>Barbara Middleton</strong>
                    <br />
                    <p style={styles.forum}> </p>
                    <b style={styles.break}>Topic: Self Help Tips</b>
                    <br />
                    <br />

                    <p style={styles.list}>Hi Everyone, <br />

      Here are some ideas for helping you manage symptoms of anxiety and depression.
      Feel free to add to the list, or let us know what works for you...<br />

                      <b>Mindfulness</b> – Grounding exercises: noticing your environment, bodily sensations, and breath

      <br /><b>Progressive Muscle Relaxation</b> – Creating a Tension and Release effect with all the muscles in the body

      <br /><b>Opposite Actions</b> – By listening to calming music, taking a walk, talking, enjoying sunshine

      <br /><b>Safe Place Mental Imagery</b> – Visualising a place where you can go in your mind to feel safe

      <br /><b>Calming Affirmations</b> – To help recognise that the moment of panic will pass

      <br /><b>Exercise</b> – A valuable way to exhaust excess adrenalin built up in the body
      <br />
                      <br />



      [Moderator's note: this thread is for sharing what has worked for you to manage your anxiety. If you need support to manage your anxiety and would like to discuss this with the community,
      please start a new thread.</p>


                    <br />
                    
                  </p>
                </div>
                <hr style={styles.hrBreak}/>
                <article className="media">
                  <figure className="media-left" style={styles.forumLeft}>
                    <p className="image is-48x48">
                      <img src="https://randomuser.me/api/portraits/men/46.jpg" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p style={styles.forumHead}>
                        <strong>Sean Brown</strong>
                        <br />
                        <ul>Stop worry by questioning the worried thought:</ul>
                        <li style={styles.list}>What’s the evidence that the thought is true? That it’s not true?</li>
                        <li style={styles.list}>Is there a more positive, realistic way of looking at the situation?</li>
                        <li style={styles.list}>What’s the probability that what I’m scared of will actually happen?</li>
                        <li style={styles.list}>If the probability is low, what are some more likely outcomes?</li>
                        <li style={styles.list}>Is the thought helpful? How will worrying about it help me and how will it hurt me?</li>
                        <li style={styles.list}>What would I say to a friend who had this worry?</li>
                        <br />
                        
                      </p>
                    </div>

                    <article className="media">
                      <b>Remembering quick and honest phrases: </b>
                      <br />
                      <br />

                      <i>"Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind." - Dr. Seuss</i>
                    </article>

                    <article className="media">
                      <b>Inspirational Quote:</b>

                      <br />
                      <i> “Wherever you go, no matter what the weather, <br />
                      always bring your own sunshine.”</i>
                    </article>
                  </div>
                </article>
                <hr style={styles.hrBreak}/>
                <article className="media">
                  <figure className="media-left" style={styles.forumLeft}>
                    <p className="image is-48x48">
                      <img src="https://randomuser.me/api/portraits/women/40.jpg" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p style={styles.forumHead}>
                        <strong>Kayli Eunice </strong>
                        <br />
                        <p style={styles.list}>I quite agree with the points you have raised and find walking particularly useful and - for me anyway - having a distraction (such as reading novels).
                        Whilst in the midst of a period of high anxiety I'm not sure I'm capable of reasoning my way out of it so distraction, either physical or mental has been my best path.

                        For me all these are short term measures to lessen the impact of symptoms at the time and do
                        not take the place of long term meds/treatment but supplement them.
                      </p>
                        <br />
                        
                      </p>
                      <div className="content">

                        {this.state.forumPosts.map(post => (
                          <>
                              <hr style={styles.hrBreak}/>
                            <h2>{post.author} || {post.title}</h2>
                            <div>
                                <p style={styles.list, styles.commentPost}>{post.post}</p> 
                             
                            </div>
                          </>
                        ))}

                      </div>
                    </div>
                  </div>

                </article>
              </div>
            </article>
            <article className="media">
              <div className="media-content">
                <div className="field">
                  <p className="control" style={styles.forum}>
                         
                          <input className="input is-primary" placeholder="Username or Name" type="text" value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })} />
                          
                          <input className="input is-primary" placeholder="Title" type="text" value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
                    <textarea id="commentArea" className="textarea is-primary" value={this.state.comment} onChange={this.handleChange} placeholder="Add a comment..."></textarea>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button onClick={this.handleSubmit} className="button is-success is-light">Post comment</button>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>


    );
  }
}

export default Community;

const styles = {
  forum: {
    fontSize: "30px",
    marginRight: "50px",
  },
  forumHead: {
    margintop: "50px",
    marginLeft: "-10px"
  },
  forumLeft: {
    marginLeft: "-100px",

  },
  ForumBody: {
    fontSize: "40px"
  },
  h1: {
    fontSize: "70px",
    marginBottom: "100px",
    fontFamily: "raleway",
    textAlign: "left",
    color: "#718D7B"
    
  },
  list: {
    fontSize: "30px"
  },
  break: {
    marginLeft: "100px"
  },
  hr: {
    backgroundColor: "black",
    marginTop: "50px"
  },
  menu: {
    position: "sticky",
    maxHeight: "100vw",
    marginTop: "10px"

  },
  font: {
    color: "black"
  },
  active: {
    backgroundColor: "grey"
  },
  commentPost: {
    backgroundColor: "white",
    opacity:"65%"
  },
  hrBreak: {
    borderTop: "5px dotted grey",
    margin: "auto"
  }
}



