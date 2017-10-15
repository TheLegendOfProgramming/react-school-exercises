import React from 'react'
import carExamples from './carStore'

class Cars {
	constructor() {
		this._data = carExamples
	}
	getAllCars() {
		return this._data
	}
	getCar(id) {
		return this._data.find(item => item.id === id)
	}
	getCarListInParagraphs() {
		let compData = []
		this.getAllCars().forEach(function(c) {
		  compData.push( (<p>{c.id}, {c.make}</p>) )
		})
		return compData
	}
}

export default new Cars();