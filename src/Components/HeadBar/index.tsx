import React from "react"
import "./style.less"
interface Option{
	title: string
	func: any
}
interface IProp{
	logo: string
	options: Array<Option>
}

export default class HeadBar extends React.Component<IProp,{}>{
	constructor(props:IProp){
		super(props)
	}
	render(){
		const {
			logo,
			options
		} = this.props
		return (
			<div className="headBar">
				<div className='up'>
					<div className="menu"/>
					<div className='options'>
						{options.map((option,i)=>{
							const { title, func } = option
							return (
								<div key={i} className="title" onClick={func}>
									{title}
								</div>
							)
						})}
					</div>
					<img className='logo' src = {logo}/>
				</div>
				<div className='down'></div>
			</div>
		)
	}
}