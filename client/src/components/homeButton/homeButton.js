import React from 'react';

const styles= {
    button: {
        marginTop: "-40px",
        paddingTop: "50px"
    }
}

function HomeButton() {
    return(
        <section className="container">
        <div className="columns">
            <div className="column"></div>
            <div className="column">
        <div className="" style={styles.button}>
        <div class="control has-icons-left has-icons-right">
  <input class="input is-medium" type="email" placeholder="Email" />
  <span class="icon is-small is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-small is-right">
    <i class="fas fa-check"></i>
  </span>
</div>
<br />
            <button class="button is-small is-light">Join Our Email List</button>
        </div>
        </div>
        <div className="column"></div>
        </div>
        </section>
    )
}

export default HomeButton;