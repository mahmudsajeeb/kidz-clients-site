import React from 'react'
import useTitle from '../../hook/UseTitle'

function Blog() {
  useTitle("blog")
  return (
    <div>
    <div className="max-w-xl mx-auto bg-white rounded shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4">What is an access token and refresh token?How do they work and where should we store them on the client-side?</h2>
      <p className="text-gray-700 mb-6">
        An access token is a credential used to authenticate and authorize requests made to a server. It is typically short-lived and is issued to a client after successful authentication. The client includes the access token in subsequent requests to access protected resources. A refresh token, on the other hand, is a long-lived token used to obtain a new access token once the current access token expires.
      </p>

      <h2 className="text-2xl font-bold mb-4">Compare SQL and NoSQL databases</h2>
      <p className="text-gray-700 mb-6">
        SQL (Structured Query Language) databases are based on a relational model and use tables to store data with predefined schemas. They provide ACID (Atomicity, Consistency, Isolation, Durability) properties and are suitable for complex and structured data. NoSQL databases, on the other hand, offer flexible schemas and do not rely on tables. They are designed for scalability and handle unstructured and semi-structured data effectively.
      </p>

      <h2 className="text-2xl font-bold mb-4">What is Express.js?</h2>
      <p className="text-gray-700 mb-6">
        Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web and mobile applications. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and managing application state. It is widely used to build APIs, web servers, and single-page applications.
      </p>

      <h2 className="text-2xl font-bold mb-4">What is NestJS?</h2>
      <p className="text-gray-700 mb-6">
        NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It uses TypeScript and follows the modular architecture pattern inspired by Angular. NestJS provides a solid foundation for creating robust APIs, microservices, and full-stack applications. It integrates well with various libraries and frameworks, making it a popular choice for enterprise-grade applications.
      </p>

      <h2 className="text-2xl font-bold mb-4">What is MongoDB aggregate and how does it work?</h2>
      <p className="text-gray-700">
        MongoDB's aggregate function is used for performing advanced data aggregation operations on collections. It allows you to process and transform data using various stages, such as filtering, grouping, sorting, projecting, and more. Aggregation pipelines consist of multiple stages chained together to perform complex computations. MongoDB's aggregate provides powerful aggregation capabilities, making it easier to analyze and aggregate data within the database.
      </p>
    </div>
    </div>
  )
}

export default Blog