import React, { Component } from 'react'
import './styles.scss'

export default class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            tools: [
                {
                    name: "Human assistance",
                    content: "Your personal assistant has the solution for your technical problem - whether it is a minor annoyance or a catastrophic failure.",
                    style: {backgroundPositionX: 0, width: 50, borderRadius: "50%"}
                },
                {
                    name: "Internet security",
                    content: "Protect your Mac from phishing attacks, malware, spyware, adware, viruses and identity theft while you're using the Internet.",
                    style: {backgroundPositionX: -794, width: 43, borderRadius: 10}
                },
                {
                    name: "Anti-theft",
                    content: "If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.",
                    style: {backgroundPositionX: -166, width: 50}
                },
                {
                    name: "Fast cleanup",
                    content: "Quickly remove junk files (such as temporary caches, logs, unused language packages and legacy application parts) that may take up hard drive space and slow down your Mac.",
                    style: {backgroundPositionX: -839, width: 50, borderRadius: 15}
                },
                {
                    name: "Duplicates finder",
                    content: "Delete unnecessary copies of your files and free up disk space on your Mac.",
                    style: {backgroundPositionX: -892, width: 55}
                },
                {
                    name: "Geek on demand",
                    content: "Geek on Demand is the ultimate tool when you have a problem or question that is related to your Mac's health and need an expert's opinion or technical assistance.",
                    style: {backgroundPositionX: -50, width: 57}
                },
                {
                    name: "Update tracker",
                    content: "With Update Tracker you will never miss out any important security patches and upgrades for most of your applications.",
                    style: {backgroundPositionX: -682, width: 54}
                },
                {
                    name: "Backup",
                    content: "Backing up your important files and folders is an easy, fast and reliable way to keep them safe and secure.",
                    style: {backgroundPositionX: -224, width: 54}
                },
                {
                    name: "Files recovery",
                    content: "Now you can recover files that were once deleted from the Trash!",
                    style: {backgroundPositionX: -737, width: 50, borderRadius: 15}
                },
                {
                    name: "Disk usage",
                    content: "Visualize the size of the folders on your hard drive so you can tell at a glance which folders are taking up the most space.",
                    style: {backgroundPositionX: -620, width: 62, borderRadius: "0 0 15px 0"}
                },
                {
                    name: "Smart uninstaller",
                    content: "Prevent future junk by making sure that you're not just sweeping old applications under the rug when you are trying to delete them.",
                    style: {backgroundPositionX: -555, width: 58}
                },
                {
                    name: "Data encryptor",
                    content: "Make your restricted files absolutely invisible to anyone without the right password, protecting even your most sensitive information.",
                    style: {backgroundPositionX: -335, width: 49}
                },
                {
                    name: "Default apps",
                    content: "The easiest way to define which application will open each file type.",
                    style: {backgroundPositionX: -286, width: 48, borderRadius: 15}
                },
                {
                    name: "Shredder",
                    content: "Securely delete files and folders that you don't ever want to be recovered.",
                    style: {backgroundPositionX: -497, width: 51}
                },
                {
                    name: "Files finder",
                    content: "Quickly search for and find any lost or misplaced file, even if you don't know in which folder it is located.Quickly search for and find any lost or misplaced file, even if you don't know in which folder it is located.",
                    style: {backgroundPositionX: -437, width: 56}
                },
                {
                    name: "Login items",
                    content: "Take control of how fast your Mac boots up by deciding which applications launch every time you start it.",
                    style: {backgroundPositionX: -392, width: 41}
                },
                {
                    name: "Memory Cleaner",
                    content: "Automatically optimizes and monitors your Mac’s RAM memory while you are performing your daily tasks.",
                    style: {backgroundPositionX: -114, width: 45}
                }
            ]
        }
    }
    changeTool(e){
        if(e.target.nodeName == "LI"){
            this.setState(
                ...this.state, {current: e.target.getAttribute('data-number')}
            )
        } else if(e.target.nodeName == "SPAN"){
            this.setState(
                ...this.state, {current: e.target.parentNode.getAttribute('data-number')}
            )
        }
    }
  render() {
    return (
        <section className="tools">
            <div className="container">
                <h2>What we have to keep your Mac <span>clean and safe</span></h2>
                <div className="tools__container">
                    <ul>
                        {this.state.tools.map(function(item, number){
                            return (
                                <li key={number}
                                    data-number={number}
                                    className={this.state.current == number ? "current" : null}
                                    onClick={::this.changeTool}
                                    >
                                    <span
                                        style={item.style}
                                    />
                                    </li>
                            )
                        }, this)}
                    </ul>
                </div>
                <div className="tools__current">
                    <div className="tools__current__title">
                        <div className="tools__current__img" style={{
                            backgroundPositionX : this.state.tools[this.state.current].style.backgroundPositionX*1.314,
                            width: this.state.tools[this.state.current].style.width*1.315,
                            borderRadius: this.state.tools[this.state.current].style.borderRadius
                        }}></div>
                        <h3 className="tools__current__name">{this.state.tools[this.state.current].name}</h3>
                    </div>
                    <div className="tools__current__content">
                        <p>{this.state.tools[this.state.current].content}</p>
                        <a href="#" className="light">Download Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
