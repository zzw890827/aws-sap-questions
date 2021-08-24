# 高频错题

1. A company deployed a three-tier web application in two regions:us-east-1 and eu-west-1. The application must be active in both regions at the same time. The database tier of the application uses a single Amazon RDS Aurora database globally, with a master in us-east-1 and a read replica in eu-west-1. Both regions are connected by a VPN The company wants to ensure that the application remains available even in the event of a region-level failure of all the application's components. It is acceptable for the application to be in read-only mode for up to 1 hour. The company plans to configure two Amazon Route 53 record sets, one for each of the regions. How should the company complete the configuration to meet its requirements while providing the lowest latency for the application end-users? (Choose two.)
   - [ ] A. Use failover routing and configure the us-east-1 record set as primary and the eu-west-1 record set as secondary. Configure an HTTP health check for the web application in us-east-1, and associate it to the us-east-1 record set.
   - [ ] B. Use weighted routing and configure each record set with a weight of 50. Configure an HTTP health check for each region and attach it to the record set for that region.
   - [ ] C. Use latency-based routing for both record sets. Configure a health check for each region and attach it to the record set for that region.
   - [ ] D. Configure an Amazon CloudWatch alarm for the health checks in us-east-1, and have it invoke an AWS Lambda function that promotes the read replica in eu-west-1.
   - [ ] E. Configure an Amazon RDS event notifications to react to the failure of the database in us-east-1 by invoking an AWS Lambda function that promotes the read replica in eu-west-1.

   <details>
      <summary>Answer</summary>

      第109题，答案CE。

   </details>

2. A Solutions Architect is redesigning an image-viewing and messaging platform to be delivered as SaaS. Currently, there is a farm of virtual desktop infrastructure (VDI) that runs a desktop image- viewing application and a desktop messaging application. Both applications use a shared database to manage user accounts and sharing. Users log in from a web portal that launches the applications and streams the view of the application on the user's machine. The Development Operations team wants to move away from using VDI and wants to rewrite the application. What is the MOST cost-effective architecture that offers both security and ease of management?
   - [ ] A. Run a website from an Amazon S3 bucket with a separate S3 bucket for images and messaging data. Call AWS Lambda functions from embedded JavaScript to manage the dynamic content and use Amazon Cognito for user and sharing management.
   - [ ] B. Run a website from Amazon EC2 Linux servers, storing the images in Amazon S3, and use Amazon Cognito for user accounts and sharing. Create AWS CloudFormation templates to launch the application by using EC2 user data to install and configure the application.
   - [ ] C. Run a website as an AWS Elastic Beanstalk application, storing the images in Amazon S3, and using an Amazon RDS database for user accounts and sharing. Create AWS CloudFormation templates to launch the application and perform blue/green deployments.
   - [ ] D. Run a website from an Amazon S3 bucket that authorizes Amazon AppStream to stream applications for a combined image viewer and messenger that stores images in Amazon S3. Have the website use an Amazon RDS database for user accounts and sharing.

3. A company has multiple AWS accounts hosting IT applications. An Amazon CloudWatch Logs agent is installed on all Amazon EC2 instances. The company wants to aggregate all security events in a centralized AWS account dedicated to log storage. Security Administrators need to perform near-real-time gathering and correlating of events across multiple AWS accounts. Which solution satisfies these requirements?
   - [ ] A. Create a Log Audit IAM role in each application AWS account with permissions to view CloudWatch Logs, configure an AWS Lambda function to assume the Log Audit role, and perform an hourly export of CloudWatch Logs data to an Amazon S3 bucket in the logging AWS account.
   - [ ] B. Configure CloudWatch Logs streams in each application AWS account to forward events to CloudWatch Logs in the logging AWS account. In the logging AWS account, subscribe an Amazon Kinesis Data Firehose stream to Amazon CloudWatch Events, and use the stream to persist log data in Amazon S3.
   - [ ] C. Create Amazon Kinesis Data Streams in the logging account, subscribe the stream to CloudWatch Logs streams in each application AWS account, configure an Amazon Kinesis Data Firehose delivery stream with the Data Streams as its source, and persist the log data in an Amazon S3 bucket inside the logging AWS account.
   - [ ] D. Configure CloudWatch Logs agents to publish data to an Amazon Kinesis Data Firehose stream in the logging AWS account, use an AWS Lambda function to read messages from the stream and push messages to Data Firehose, and persist the data in Amazon S3.

   <details>
      <summary>Answer</summary>

      第135题，答案A。

   </details>

4. A company currently uses a single 1 Gbps AWS Direct Connect connection to establish connectivity between an AWS Region and its data center. The company has five Amazon VPCs, all of which are connected to the data center using the same Direct Connect connection. The Network team is worried about the single point of failure and is interested in improving the redundancy of the connections to AWS while keeping costs to a minimum. Which solution would improve the redundancy of the connection to AWS while meeting the cost requirements?
   - [ ] A. Provision another 1 Gbps Direct Connect connection and create new VIFs to each of the VPCs. Configure the VIFs in a load balancing fashion using BGP.
   - [ ] B. Set up VPN tunnels from the data center to each VPC. Terminate each VPN tunnel at the virtual private gateway (VGW) of the respective VPC and set up BGP for route management.
   - [ ] C. Set up a new point-to-point Multiprotocol Label Switching (MPLS) connection to the AWS Region that's being used. Configure BGP to use this new circuit as passive, so that no traffic flows through this unless the AWS Direct Connect fails.
   - [ ] D. Create a public VIF on the Direct Connect connection and set up a VPN tunnel which will terminate on the virtual private gateway (VGW) of the respective VPC using the public V IF. Use BGP to handle the failover to the VPN connection.

   <details>
      <summary>Answer</summary>

      第63题，答案B。

   </details>

5. A company has a requirement that only allows specially hardened AMIs to be launched into public subnets in a VPC, and for the AMIs to be associated with a specific security group. Allowing non-compliant instances to launch into the public subnet could present a significant security risk if they are allowed to operate. A mapping of approved AMIs to subnets to security groups exists in an Amazon DynamoDB table in the same AWS account. The company created an AWS Lambda function that, when invoked, will terminate a given Amazon EC2 instance if the combination of AMI, subnet, and security group are not approved in the DynamoDB table. What should the Solutions Architect do to mitigate the risk of compliance deviations MOST quickly?
   - [ ] A. Create an Amazon CloudWatch Events rule that matches each time an EC2 instance is launched using one of the allowed AMIs, and associate it with the Lambda function as the target.
   - [ ] B. For the Amazon S3 bucket receiving the Aws CloudTrail logs, create an S3 event notification configuration with a filter to match when logs contain the ec2:RunInstances action, and associate it with the Lambda function as the target.
   - [ ] C. Enable AWS CloudTrail and configure it to stream to an Amazon CloudWatch Logs group. Create a metric filter in CloudWatch to match when the ec2:RunInstances action occurs, and trigger the Lambda function when the metric is greater than 0.
   - [ ] D. Create an Amazon CloudWatch Events rule that matches each time an EC2 instance is launched, and associate it with the Lambda function as the target.

   <details>
      <summary>Answer</summary>

      第113题，答案D。

   </details>

6. A large trading company is using an on-premises system to analyze the trade data. After the trading day closes, the data including the day's transaction costs, execution reporting, and market performance is sent to a Redhat server which runs big data analytics tools for predictions for next day trading. A bash script is used to configure resource and schedule when to run the data analytics workloads. How should the on-premises system be migrated to AWS with appropriate tools? (Select THREE)
   - [ ] A. Create a S3 bucket to store the trade data that is used for post processing.
   - [ ] B. Send the trade data from various sources to a dedicated SQS queue.
   - [ ] C. Use AWS Batch to execute the bash script using a proper job definition.
   - [ ] D. Create EC2 instances with auto-scaling to handle with the big data analytics workloads.
   - [ ] E. Use CloudWatch Events to schedule the data analytics jobs.

   <details>
      <summary>Answer</summary>

      第145题，答案ACD。

   </details>
