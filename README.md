# Placeholder Name

## Table of Contents
* [About](#about)
* [Getting Started](#getting-started)
* [Components](#components)
 

## About
Placeholder is a project for the Austin Transportation Department. This project takes previously created pages and makes
them into re-usable components.

## Getting Started

## Components
* [Controller](#controller)
* [Table](#table)
* [Filter](#filter)
* [Charts](#charts)
* [Map](#map)
* [Markers](#markers)
* [Custom Marker](#custom-marker)
* [Custom Circle Marker](#custom-circle-marker)
* [Popup Frame](#popup-frame)
* [Card](#card)

### Controller
Controller is a default configuration that contains a table, filters charts
a map, and takes a single configuration file. Best example is in the getting started section.
### Table
Table is a component that pulls data and displays it in a table format, uses React-Tables
##### Props
data: Array  
filter: Array  
fromGroup: Object  
getPosition: Func  
headers: Array of Objects

### Filter
Filter are components that take user input and push that data to parent component. 
##### Props
myKey: Number  
pullData: Func()  
label: String  
name: String  
type: String['toggle' or 'search']
opts: String or Object

### Charts
##### Props

### Map
##### Props

### Markers
##### Props

### Custom Marker
##### Props

### Custom Circle Marker
##### Props

### Popup Frame
##### Props

### Card
##### Props