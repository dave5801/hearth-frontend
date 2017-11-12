import React from 'react';
import {styles} from './Resource.css';

const ResourceDetailPage = React.createClass({
  getInitialState() {
    return {
      resource: {}
    };
  },
  componentDidMount() {
    console.log(this.props);
    this.fetchResource();
  },
  fetchResource() {
    Promise.resolve(mockResult)
      .then((result) => {
        this.setState({ resource: result });
      })
  },
  formatAddress() {
    if (!this.state.resource) {
      return '';
    } else {
      return `${this.state.resource.street}, ${this.state.resource.city}, ${this.state.resource.state}, ${this.state.resource.zip_code}`;
    }
  },
  render() {
    return (
      <section>
        <h1 className="resource-detail-h1">{this.state.resource.org_name}</h1>
        <ul className="resource-detail-ul">
          <p>Address: {this.formatAddress()}</p>
          <p>Phone: {this.state.resource.phone}</p>
          <p>Description: {this.state.resource.description}</p>
        </ul>
        <div className="row resource-detail-edit">
          <div className="col-2 col-md-2">
            <a href="/resource/1/edit/"><button type="button" className="btn btn-warning btn-lg">Edit Resource</button></a>
          </div>
        </div>

        <div className="map resource-detail-map">
          <iframe className="map-class " width="900" height="450" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAgPIVjOnke7nERCIiuF9oLzG2HRS1AwDs&amp;q=Shelter and Medical Organization+123 Main St+Seattle+,+WA+98101&amp;zoom=14"></iframe>
        </div>

        <div className="row resource-detail-extra">
          <div className="col-8 col-md-8">
            <p>Need more information? Visit their website <a href="http://foobar.com" target="_blank">here</a>.</p>
          </div>
        </div>
      </section>
    );
  }
});

export default ResourceDetailPage;


let mockResult = {
  id: "1",
  org_name: 'Shelter and Medical Organization',
  street: '123 Main Street',
  city: 'Seattle',
  state: 'Washington',
  zip_code: '98101',
  phone: '123-123-1233',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing so',
};