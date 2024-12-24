import React from 'react';
const About= () => {
    return (
        <section id="about" class="py-5 bg-light">
            <div class="container">
               <h2 class="text-center mb-4">Abstract</h2> 
               <p>Telecommunication industry produces huge measures of excellent information about clients, administrative utilisation and the organisational hardware. Along with this, it has received the usage of data mining techniques to find valuable information about the customer churn prediction. By using data mining techniques, it is very easy to predict customer churn according to their behaviour and different measures. The idea  behind this project is to use data mining techniques to compare and predict customer churn in telecommunications, so that intelligent business decisions can be made for increasing user experience and thus retaining more customers.</p>
               <h2 class="text-center mb-4">Introduction</h2>
               <p>Customer churn means moving from one specialist organisation to its rival on the lookout. Customer churn is probably the greatest fear of any industry, especially for the telecommunication industry. With an increment in the quantity of telecom specialist in the world, the level of competition is very high. In spite of the fact that there are numerous reasons behind customer churn, some reasons for their dissatisfaction are expensive membership, and better other options. The telecommunication organisation providers strive difficult to sustain in this competition. So, to support this competition they frequently attempt to hold their clients than acquiring new ones as it is proved to be much costlier. Hence predicting churn in the telecommunication industry is very important. To reduce customer churn,  telecommunication organisations need to predict which customers are at high risk of churn</p>
               <h2 class="text-center mb-4">Existing System</h2>
               <p>In Existing System there are two algorithms used.
               i.e Logistic Regression and Logit Boost.</p>
               <h2 class="text-center mb-4">Proposed System</h2>
               <ul class="text-center mb-4">
               <li>Collect the relevant data from different sources such as telecommunication organisations.</li>
               <li> Data is pre-processed for feature extraction and labelling.</li>
               <li>Pre-processed data is applied on different classifier algorithm.</li>
               <li> The algorithms used are Logistic Regression, K-Nearest Neighbor, Support Vector Machine, Random Forest Classifier, Naïve Bayes Classifier, Decision Tree.</li>
                </ul>
                <h2 class="text-center mb-4">Architecture Diagram</h2>
                <img src="/images/Untitled3.jpg"  alt="Architecture Diagram" width="500" height="300" style={{display: 'block', margin: '0 auto' }} />
            </div>
        </section>
    );
};

export default About;