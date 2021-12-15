import React from "react"
import HeadBar from "@/Components/HeadBar"
import logo from "@/Static/transHarvey.png"

export class Homepage extends React.Component{
	render(){
		return (
			<HeadBar logo = {logo} options = {[
				{title: "Profile", func:()=>{}},
				{title: "Resume", func:()=>{}}
			]}/>
		)
	}
}