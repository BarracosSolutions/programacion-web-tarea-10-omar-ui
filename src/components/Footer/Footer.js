import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Footer =  props  => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem active>Omar Segura</BreadcrumbItem>
                <BreadcrumbItem active>Licenciatura</BreadcrumbItem>
                <BreadcrumbItem active>2018</BreadcrumbItem>
            </Breadcrumb>
        </div>
      );
};

export default Footer;