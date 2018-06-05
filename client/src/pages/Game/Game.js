import React, {Component} from 'react'
import {Card, CardGroup} from '../../components/Card'
import {Row, Col} from '../../components/Grid'
import './Game.css'
import level1 from './level1.png'
import level2 from './level2.png'
import level3 from './level3.png'

class Game extends Component {
    state = {
    }

    render() {
        return (
            <CardGroup>
                <Card
                    href="/level1"
                    img={level1}
                    alt="level 1"
                    title="Aliquam erat volutpat"
                    text="Curabitur cursus nisi a magna semper lobortis."
                />
                <Card
                    href="/level2"
                    img={level2}
                    alt="level 2"
                    title="Proin eget rutrum odio"
                    text="Aenean justo neque, fringilla sit amet maximus nec."
                />
                <Card
                    href="/level3"
                    img={level3}
                    alt="level 3"
                    title="Donec elementum quam sit amet"
                    text="Mauris sem nisi, dignissim a sem sit amet."
                />
            </CardGroup>
        )
    }
}

export default Game