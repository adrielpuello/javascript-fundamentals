import React from "react";

const Questions = () => {
    return (
        <div className='question-container'>
            <h1 className='large-title' id='general-questions'>General Software Engineering (SWE) Questions</h1>
            <div className='question-card'>
                <div className='question'>
                    <h2 className='medium-title'>What are the various categories of software?</h2>
                    <p>Software products are mainly categorized into:</p>
                    <ul>
                        <li><strong>System software:</strong> Softwares like operating systems, compilers, drivers, etc. fall into this category.</li>
                        <li><strong>Networking and web development software:</strong> Computer networking software offers the necessary functionality for computers to communicate with one another and with data storage facilities.</li>
                        <li><strong>Embedded Software:</strong> Software used in instrumentation and control applications such as washing machines, satellites, microwaves, TVs, etc.</li>
                        <li><strong>Artificial Intelligence Software:</strong> Expert systems, decision support systems, pattern recognition software, artificial neural networks, and other types of software are included in this category.</li>
                        <li><strong>Scientific software:</strong> These support a scientific or engineering user's requirements for performing enterprise-specific tasks. Examples include MATLAB, AUTOCAD, etc.</li>
                    </ul>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What are the characteristics of software?</h2>
                        <p>There are six major characteristics of software:</p>
                        <ul>
                            <li><strong>Functionality:</strong> The things that software is intended to do are called functionality. For example, a calculator's functionality is to perform mathematical operations.</li>
                            <li><strong>Efficiency:</strong> It is the ability of the software to use the provided resources in the best way possible. Increasing the efficiency of software increases resource utilization and reduces cost.</li>
                            <li><strong>Reliability:</strong> Reliability is the probability of failure-free operational software in an environment. It is an important characteristic of software.</li>
                            <li><strong>Usability:</strong> It refers to the user’s experience while using the software. Usability determines the satisfaction of the user.</li>
                            <li><strong>Maintainability:</strong> The ease with which you can repair, improve, and comprehend software code is referred to as maintainability. After the customer receives the product, a phase in the software development cycle called software maintenance begins.</li>
                            <li><strong>Portability:</strong> It refers to the ease with which the software product can be transferred from one environment to another.</li>
                        </ul>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is the main difference between a computer program and computer software?</h2>
                        <p>The key difference between software is a collection of several programs used to complete tasks, whereas a program is a set of instructions expressed in a programming language. A program can be software, but software cannot be a program.</p>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>Describe the Software Development Life Cycle.</h2>
                        <p>The <strong>Software Development Life Cycle</strong> (SDLC) is a number of fundamental phases that teams must follow in order to produce and deliver high-quality software. Software typically goes through the following phases:</p>
                        <ul>
                            <li><strong>Requirements Gathering:</strong> The team identifies, collects, and defines core issues, requirements, requests, and customer expectations related to the software application or service during this stage of the project. Generating software specifications, creating a thorough strategy, documentation, issue tracking, and project or product planning, including allocating the resources, are some tasks done during this phase.</li>
                            <li><strong>Software Design:</strong> The team makes software design decisions regarding the architecture and make of the software solution throughout this design phase of development.</li>
                            <li><strong>Software Development:</strong> Teams develop software solutions based on the design decisions made during earlier stages of the project</li>
                            <li><strong>Testing and Integration:</strong> Software is packaged and tested to ensure quality. Quality assurance, often known as testing, ensures that the solutions deployed fulfil the specified quality and performance criteria.</li>
                            <li><strong>Deployment:</strong> The software is installed in a production setting. The gathered, designed, built, and tested work is shared with the software service's customers and users.</li>
                            <li><strong>Operation and Maintenance:</strong> The software is installed in a production setting. The work is shared with the software service's customers and users.</li>
                        </ul>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is Debugging?</h2>
                        <p>Debugging is the process of finding a software bug, in the context of software engineering. To put it another way, it refers to the process of finding, evaluating, and correcting problems. Debugging is essential once the software fails to run properly.</p>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is an API?</h2>
                        <p>An application programming interface is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.</p>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is REST?</h2>
                        <p>REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier 
                        for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and
                        separate the concerns of client and server. REST requires that a client make a request to the server in order to retrieve or modify data on the server.
                        A request generally consists of:</p>
                        <ul>
                            <li>an HTTP verb, which defines what kind of operation to perform</li>
                            <li>a header, which allows the client to pass along information about the request</li>
                            <li>a path to a resource</li>
                            <li>an optional message body containing data</li>
                        </ul>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is an HTTP verb?</h2>
                        <p>There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system:</p>
                        <ul>
                            <li>GET — retrieve a specific resource (by id) or a collection of resources</li>
                            <li>POST — create a new resource</li>
                            <li>PUT/PATCH — update a specific resource (by id)</li>
                            <li>DELETE — remove a specific resource by id</li>
                        </ul>
                        <p>These four verbs work hand in hand with the CRUD concepts:</p>
                        <ul>
                            <li>Create</li>
                            <li>Read</li>
                            <li>Update</li>
                            <li>Delete</li>
                        </ul>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is the DOM?</h2>
                        <p>The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document.</p>
                </div>
            </div>
            <div className='question-card'>
            <h1 className='large-title' id='javascript-questions'>JavaScript Questions</h1>
                <div className='question'>
                        <h2 className='medium-title'>What is Object-Oriented Programming (OOP)?</h2>
                        <p>Object-Oriented Programming (OOP) is a programming paradigm that uses objects to represent and manipulate data. OOP focuses on creating reusable code, and it allows developers to break down complex problems into smaller, more manageable pieces.</p>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What are the four pillars of OOPs?</h2>
                        <p>The four pillars are:</p>
                        <ul>
                            <li><strong>Encapsulation:</strong> A way to keep code organized and separate from other codes in the system. It is done by using classes that contain all the code related to a specific feature or subject.</li>
                            <li><strong>Abstraction:</strong> The process of hiding internal details or processes from the user. This is done by creating classes that represent real-world objects and their attributes.</li>
                            <li><strong>Inheritance:</strong> When a class inherits the methods and properties of another class. This allows developers to reuse code and easily add new features.</li>
                            <li><strong>Polymorphism:</strong> Allows developers to create multiple methods with the same name, but with different implementations. This makes it easier to create flexible systems that are easier to understand and maintain.</li>
                        </ul>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is an object in JavaScript?</h2>
                        <p>In JavaScript, an object is a collection of properties, where each property is a key-value pair. Properties can be added, modified, or removed from an object at any time.</p>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is the difference between an object and a class in JavaScript?</h2>
                        <p>In JavaScript, there is no concept of a class in the traditional sense. Instead, objects can be created directly from functions or through constructor functions, which act as a blueprint for creating objects.</p>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is a loop?</h2>
                        <p>There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)

                        The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

                        The statements for loops provided in JavaScript are:
                        </p>
                        <ul>
                            <li>for statement</li>
                            <li>do...while</li>
                            <li>labeled statement</li>
                            <li>break statement</li>
                            <li>continue statement</li>
                            <li>for...in statement</li>
                            <li>for...of statement</li>
                        </ul>
                </div>
            </div>
            <div className='question-card'>
                <h1 className='large-title'>React Questions</h1>
                <div className='question'>
                        <h2 className='medium-title'>What is a framework?</h2>
                        <p>A framework is a well-known method of developing and deploying software. It is a set of tools that allows developing software by providing information on how to make it on an abstract level, rather than giving exact details. The Software Process Framework is the basis of the entire software development process. The umbrella activities are also included in the software process structure.</p>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is a library?</h2>
                        <p>A programming library is a collection of prewritten code that programmers can use to optimize tasks.
                        This collection of reusable code is usually targeted for specific common problems. A library usually includes a few different pre-coded components.</p>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is the difference between a library and a framework?</h2>
                        <p>You could think of it this way: the framework is a model house, and a library is the flat-pack furniture and decor that goes inside. 

                        In most instances, a library is a collection of objects and functions that can be used individually and must be configured to work together. Libraries focus on solving a specific problem within an area of development. Libraries allow you to dictate the flow of an application, add custom code, and quickly add only components that you need. 

                        Frameworks are often more like blueprints. Frameworks are collections of coded components that are already configured to work together. Frameworks generally include a preset architecture or design that developers must work within.

                        Frameworks often focus on functioning as an all-in-one solution for a specific methodology. 

                        A model house doesn't have many custom choices. It's based on a predetermined blueprint and standard options. On the other hand, Ikea has tons of options and customizations for its easy-to-build furniture.</p>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is an event in React?</h2>
                        <p>An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.</p>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What are Hooks?</h2>
                        <p>Hooks are features that allow you to “hook into” the features of React state and lifecycle from function components. Examples of this are useState and useEffect.</p>
                </div>
                <div className='question'>
                        <h2 className='medium-title'>What is useEffect?</h2>
                        <p>The useEffect Hook allows you to perform side effects in your components after the initial render. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                </div>
            </div>
            {/* <div className='question'>
                    <h2 className='medium-title'></h2>
                    <p></p>
            </div> */}
        </div>
    )
}

export default Questions;