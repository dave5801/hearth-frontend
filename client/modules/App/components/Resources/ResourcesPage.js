import React from 'react';
import { Link } from 'react-router';

const mockResults = [
  {
    id: 1,
    org_name: 'Shelter and Medical Organization',
    street: '123 Main Street',
    city: 'Seattle',
    state: 'Washington',
    zip_code: '98101',
    phone: '123-123-1233',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing so',
  },
  {
    id: 2,
    org_name: 'Trauma Food Org',
    street: '786 Foo Street',
    city: 'Seattle',
    state: 'Washington',
    zip_code: '98101',
    phone: '123-123-1233',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing so',
  },
];

const ResourcesPage = React.createClass({
  getInitialState() {
    return {
      resources: [],
    };
  },
  componentDidMount() {
    this.fetchResources();
  },
  fetchResources() {
    Promise.resolve(mockResults)
      .then((results) => {
        this.setState({ resources: results });
      });
  },
  showResourceDetails(resource) {
    return (
      <div key={resource.org_name} className="container">
        <div className="col col-md-12 text-center">
          <div className="service-box">
            <i className="fa fa-4x fa-heart text-primary sr-icons heart" crossOrigin="anonymous" data-sr-id="2"></i>
            <h3><Link to={`/resource/${resource.id}`}>{resource.org_name}</Link></h3>
            <h5 className="text-muted"><a href="/resource/1">{resource.street}, {resource.city}, {resource.state} {resource.zip_code}</a></h5>
            <h6 className="text-muted">{resource.phone}</h6>
            <p>{resource.description}</p>
          </div>
        </div>
      </div>
    );
  },
  render() {
    return (
      <section>
        <div className="container">
          <div className="col col-md-12 text-center">
            <h2 className="section-heading">Resources</h2>
            <hr className="primary" />
          </div>
        </div>
        {
          this.state.resources.map(this.showResourceDetails)
        }
      </section>
    );
  },
});

export default ResourcesPage;
