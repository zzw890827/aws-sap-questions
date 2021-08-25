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

4. A financial company is using a high-performance compute cluster running on Amazon EC2 instances to perform market simulations A DNS record must be created in an Amazon Route 53 private hosted zone when instances start The DNS record must be removed after instances are terminated. Currently the company uses a combination of Amazon CloudWatch Events and AWS Lambda to create the DNS record. The solution worked well in testing with small clusters, but in production with clusters containing thousands of instances the company sees the following error in the Lambda logs: -HTTP 400 error (Bad request). -The response header also includes a status code element with a value of `Throttling` and a status message element with a value of `Rate exceeded`. Which combination of steps should the Solutions Architect take to resolve these issues? (Select THREE)
   - [ ] A. Configure an Amazon SQS FIFO queue and configure a CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.
   - [ ] B. Configure an Amazon Kinesis data stream and configure a CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.
   - [ ] C. Update the CloudWatch Events rule to trigger on Amazon EC2 `Instance Launch Successful` and `Instance Terminate Successful` events for the auto scaling group by the cluster.
   - [ ] D. Configure a Lambda function to retrieve messages from an amazon SQS queue. Modify the Lambda function to retrieve a maximum of 10 messages, then batch the messages by Amazon Route 53 API call type and submit. Delete the messages from the SQS queue after successful API calls.
   - [ ] E. Configure an Amazon SQS standard queue and configure the existing CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.
   - [ ] F. Configure a Lambda function to read data from the amazon Kinesis data stream and configure the batch window to 5 minutes. Modify the function to make a single API call to Amazon route 53 with all records read from the Kinesis data.

   <details>
      <summary>Answer</summary>

      第213题，答案ACD
  
   </details>

5. A company currently uses a single 1 Gbps AWS Direct Connect connection to establish connectivity between an AWS Region and its data center. The company has five Amazon VPCs, all of which are connected to the data center using the same Direct Connect connection. The Network team is worried about the single point of failure and is interested in improving the redundancy of the connections to AWS while keeping costs to a minimum. Which solution would improve the redundancy of the connection to AWS while meeting the cost requirements?
   - [ ] A. Provision another 1 Gbps Direct Connect connection and create new VIFs to each of the VPCs. Configure the VIFs in a load balancing fashion using BGP.
   - [ ] B. Set up VPN tunnels from the data center to each VPC. Terminate each VPN tunnel at the virtual private gateway (VGW) of the respective VPC and set up BGP for route management.
   - [ ] C. Set up a new point-to-point Multiprotocol Label Switching (MPLS) connection to the AWS Region that's being used. Configure BGP to use this new circuit as passive, so that no traffic flows through this unless the AWS Direct Connect fails.
   - [ ] D. Create a public VIF on the Direct Connect connection and set up a VPN tunnel which will terminate on the virtual private gateway (VGW) of the respective VPC using the public V IF. Use BGP to handle the failover to the VPN connection.

   <details>
      <summary>Answer</summary>

      第63题，答案B。

   </details>

6. A company has a requirement that only allows specially hardened AMIs to be launched into public subnets in a VPC, and for the AMIs to be associated with a specific security group. Allowing non-compliant instances to launch into the public subnet could present a significant security risk if they are allowed to operate. A mapping of approved AMIs to subnets to security groups exists in an Amazon DynamoDB table in the same AWS account. The company created an AWS Lambda function that, when invoked, will terminate a given Amazon EC2 instance if the combination of AMI, subnet, and security group are not approved in the DynamoDB table. What should the Solutions Architect do to mitigate the risk of compliance deviations MOST quickly?
   - [ ] A. Create an Amazon CloudWatch Events rule that matches each time an EC2 instance is launched using one of the allowed AMIs, and associate it with the Lambda function as the target.
   - [ ] B. For the Amazon S3 bucket receiving the Aws CloudTrail logs, create an S3 event notification configuration with a filter to match when logs contain the ec2:RunInstances action, and associate it with the Lambda function as the target.
   - [ ] C. Enable AWS CloudTrail and configure it to stream to an Amazon CloudWatch Logs group. Create a metric filter in CloudWatch to match when the ec2:RunInstances action occurs, and trigger the Lambda function when the metric is greater than 0.
   - [ ] D. Create an Amazon CloudWatch Events rule that matches each time an EC2 instance is launched, and associate it with the Lambda function as the target.

   <details>
      <summary>Answer</summary>

      第113题，答案D。

   </details>

7. A large trading company is using an on-premises system to analyze the trade data. After the trading day closes, the data including the day's transaction costs, execution reporting, and market performance is sent to a Redhat server which runs big data analytics tools for predictions for next day trading. A bash script is used to configure resource and schedule when to run the data analytics workloads. How should the on-premises system be migrated to AWS with appropriate tools? (Select THREE)
   - [ ] A. Create a S3 bucket to store the trade data that is used for post processing.
   - [ ] B. Send the trade data from various sources to a dedicated SQS queue.
   - [ ] C. Use AWS Batch to execute the bash script using a proper job definition.
   - [ ] D. Create EC2 instances with auto-scaling to handle with the big data analytics workloads.
   - [ ] E. Use CloudWatch Events to schedule the data analytics jobs.

   <details>
      <summary>Answer</summary>

      第145题，答案ACD。

   </details>

8. A large company starts to use AWS organizations with consolidated billing feature to manage its separate departments. The AWS operation team has just created 3 OUS (organization units) with 2 AWS accounts each. To be compliant with company-wide security policy, CloudTrail is required for all AWS accounts which is already been set up. However, after some time, there are cases that users in certain OU have turned off the CloudTrail of their accounts. What is the best way for the AWS operation team to prevent this from happening again?
   - [ ] A. Update the AWS Organizations feature and then create a Service Control Policies (SCP) to prevent users from disabling AWS CloudTrail. This can be achieved by a deny policy with `CloudTrail:StopLogging`.
   - [ ] B. This can be achieved by Service Control Policies (SCP). The team needs to delete and recreate the AWS Organizations with features enabled and then use a proper control policy to limit the operation of `CloudTrail:StopLogging`.
   - [ ] C. In each AWS account in this organization, create an IAM policy to deny `CloudTrail:StopLogging` for all users including administrators.
   - [ ] D. Use a Service Control Policies (SCP) to prevent users from disabling AWS CloudTrail. This can be done by a allow policy which denies `CloudTrail:StopLogging`.

   <details>
      <summary>Answer</summary>

      第152题，答案A。

   </details>

9. The CISO of a large enterprise with multiple IT departments, each with its own AWS account, wants one central place where AWS permissions for users can be managed and user’s authentication credentials can be synchronized with the company's existing on-premises solution. Which solution will meet the CISO's requirements?
   - [ ] A. Define AWS IAM roles based on the functional responsibilities of the users in a central account. Create a SAML-based identity management provider. Map users in the on-premises groups to IAM roles. Establish trust relationships between the other accounts and the central account.
   - [ ] B. Deploy a common set of AWS IAM users, groups, roles, and policies in all of the AWS accounts using AWS Organizations. Implement federation between the on-premises identity provider and the AWS accounts.
   - [ ] C. Use AWS Organizations in a centralized account to define service control policies (SCPs). Create a SAML-based identity management provider in each account and map users in the on-premises groups to AWS IAM roles.
   - [ ] D. Perform a thorough analysis of the user base and create AWS IAM users accounts that have the necessary permissions. Set up a process to provision and de provision accounts based on data in the on-premises solution.

   <details>
      <summary>Answer</summary>

      第160题，答案A。

   </details>

10. A large company has increased its utilization ofAWS over time in an unmanaged way. As such, they have a large number of independent AWS accounts across different business units, projects,and environments. The company has created a Cloud Center of Excellence team, which is responsible for managing all aspects of the AWS Cloud, including their AWS accounts. Which of the following should the Cloud Center of Excellence team do to BEST address their requirements in a centralized way? (Select two.)
    - [ ] A. Control all AWS account root user credentials. Assign AWS IAM users in the account of each user who needs to access AWS resources. Follow the policy of least privilege in assignmg permissions to each user.
    - [ ] B. Tag all AWS resources with details about the business unit, project, and environment. Send all AWS Cost and Usage reports to a central Amazon S3 bucket, and use tools such as Amazon Athena and Amazon QuickSight to collect billing details by business unit.
    - [ ] C. Use the AWS Marketplace to choose and deploy a Cost Management tool. Tag all AWS resources with details about the business unit, project, and environment. Send all AWS Cost and Usage reports for the AWS accounts to this tool for analysis.
    - [ ] D. Set up AWS Organizations. Enable consolidated billing, and link all existing AWS accounts to a master billing account. Tag all AWS resources with details about the business unit, project and environment. Analyze Cost and Usage reports using tools such as Amazon Athena and Amazon QuickSight to collect billing details by business unit.
    - [ ] E. Using a master AWS account, create IAM users within the master account. Define IAM roles in the other AWS accounts, which cover each of the required functions in the account. Follow the policy of least privilege in assigning permissions to each role, then enable the IAM users to assume the roles that they need to use.

    <details>
       <summary>Answer</summary>

       第161题，答案AD。

    </details>

11. A Solutions Architect must build a highly available infrastructure for a popular global video game that runs on a mobile phone platform. The application runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The database tier is an Amazon RDS MySQL Multi-AZ instance. The entire application stack is deployed in both of us-east-1 and eu-central-1. Amazon Route 53 is used to route traffic to the two installations using a latency-based routing policy. A weighted routing policy is configured in Route 53 as a failure over to another region in case the installation in a region becomes unresponsive. During the testing of disaster recovery scenarios, after blocking access to the Amazon RDS MySQL instance in eu-central-1 from all the application instances running in that region. Route 53 does not automatically failover all traffic to us-east-1. Based on this situation, which changes would allow the infrastructure to failover to us-east-1? (Choose two.)
    - [ ] A. Specify a weight of 100 for the record pointing to the primary Application Load Balancer in us-east-1 and a weight of 60 for the pointing to the primary Application Load Balancer in eu-central-1.
    - [ ] B. Specify a weight of 100 for the record pointing to the primary Application Load Balancer in us-east-1 and a weight of 0 for the record pointing to the primary Application Load Balancer in eu-central-1.
    - [ ] C. Set the value of Evaluate Target Health to Yes on the latency alias resources for both eu-central-1 and us-east-1.
    - [ ] D. Write a URL in the application that performs a health check on the database layer. Add it as a health check within the weighted routing policy in both regions.
    - [ ] E. Disable any existing health checks for the resources in the policies and set a weight of 0 for the records pointing to primary in both eu-central-1 and us-east-1, and set a weight of 100 for the primary Application Load Balancer only in the region that has healthy resources.

    <details>
       <summary>Answer</summary>

       第164题，答案CD。

    </details>

12. An online e-commerce business is running a workload on AWS. The application architecture includes a web tier, an application tier for business logic, and a database tier for user and transactional data management. The database server has a 100 GB memory requirement. The business requires cost-efficient disaster recovery for the application with an RTO of 5 minutes and an RPO of 1 hour. The business also has a regulator for out of region disaster recovery with a minimum distance between the primary and alternate sites of 250 miles. Which of the following options can the Solutions Architect design to create a comprehensive solution for this customer that meets the disaster recovery requirements?
    - [ ] A. Back up the application and database data frequently and copy them to Amazon S3. Replicate the backups using S3 cross-region replication and use AWS CloudFormation to instantiate infrastructure for disaster recovery and restore data from Amazon S3.
    - [ ] B. Employ a pilot light environment in which the primary database is configured with mirroring to build a standby database on m4.large in the alternate region. Use AWS CloudFormation to instantiate the web servers, application servers and load balancers in case of a disaster to bring the application up in the alternate region. Vertically resize the database to meet the full production demands and use Amazon Route 53 to switch traffic to the alternate region.
    - [ ] C. Use a scaled-down version of the fully functional production environment in the alternate region that includes one instance of the web server, one instance of the application server, and a replicated instance of the database server in standby mode. Place the web and the application tiers in an Auto Scaling behind a load balancer, which can automatically scale when the load arrives to the application. Use Amazon Route 53 to switch traffic to the alternate region.
    - [ ] D. Employ a multi-region solution with fully functional web, application, and database tiers in both regions with equivalent capacity. Activate the primary database in one region only and the standby database in the other region. Use Amazon Route 53 to automatically switch traffic from one region to another using health check routing policies.

    <details>
       <summary>Answer</summary>

       第165题，答案C。

    </details>

13. A company runs a memory-intensive analytics application using on-demand Amazon EC2 compute optimized instance. The application is used continuously and application demand doubles during working hours. The application currently scales based on CPU usage. When scaling in occurs, a lifecycle hook is used because the instance requires 4 minutes to clean the application state before terminating. Because users reported poor performance during working hours, scheduled scaling actions were implemented so additional instances would be added during working hours. The Solutions Architect has been asked to reduce the cost of the application. Which solution is MOST cost-effective?
    - [ ] A. Use the existing launch configuration that uses C5 instances, and update the application AMI to include the Amazon CloudWatch agent. Change the Auto Scaling policies to scale based on memory utilization. Use Reserved Instances for the number of instances required after working hours and use Spot Instances to cover the increased demand during working hours.
    - [ ] B. Update the existing launch configuration to use R5 instances, and update the application AMI to include SSM Agent. Change the Auto Scaling policies to scale based on memory utilization. Use Reserved instances for the number of instances required after working hours and use Spot Instances with on-Demand instances to cover the increased demand during working hours.
    - [ ] C. Use the existing launch configuration that uses C5 instances, and update the application AMI to include SSM Agent. Leave the Auto Scaling policies to scale based on CPU utilization. Use scheduled Reserved Instances for the number of instances required after working hours and use Spot Instances to cover the increased demand during work hours.
    - [ ] D. Create a new launch configuration using R5 instances, and update the application AMI to include the Amazon CloudWatch agent. Change the Auto Scaling policies to scale based on memory utilization. use Reserved Instances for the number of instances required after working hours and use Standard Reserved Instances with On-Demand Instances to cover the increased demand during working hours.

    <details>
       <summary>Answer</summary>

       第166题，答案D。

    </details>

14. A company runs an ordering system on AWS using Amazon SQS and AWS Lambda, with each order received as a JSON message. recently the company had a marketing event that led to a tenfold increase in orders. With this increase, the following undesired behaviors started in the ordering system: -Lambda failures while processing orders lead to queue backlogs. -The same orders have been processed multiple times. A solutions Architect has been asked to solve the existing issues with the ordering system and add the following resiliency features: -Retain problematic orders for analysis. -Send notification if errors go beyond a threshold value. How should the Solutions Architect meet these requirements?
    - [ ] A. Receive multiple messages with each Lambda invocation, add error handling to message processing code and delete messages after processing, increase the visibility timeout for the messages, create a dead letter queue for messages that could not be processed, create an Amazon CloudWatch alarm on Lambda errors for notification.
    - [ ] B. Receive single messages with each Lambda invocation, put additional Lambda workers to poll the queue, delete messages after processing, increase the message timer for the messages, use Amazon CloudWatch Logs for messages that could not be processed, create a CloudWatch alarm on Lambda errors for notification.
    - [ ] C. Receive multiple messages with each Lambda invocation, use long polling when receiving the messages, log the errors from the message processing code using Amazon CloudWatch Logs, create a dead letter queue with AWS Lambda to capture failed invocations, create CloudWatch events on Lambda errors for notification.
    - [ ] D. Receive multiple messages with each Lambda invocation, add error handling to message processing code and delete messages after processing, increase the visibility timeout for the messages, create a delay queue for messages that could not be processed, create an Amazon CloudWatch metric on Lambda errors for notification.

    <details>
       <summary>Answer</summary>

       第169题，答案A。

    </details>

15. A company is migrating its applications on AWS. The applications will be deployed to AWS accounts owned by business units. The company has several teams of Developers who are responsible for the development and maintenance of all applications. The company is expecting rapid growth in the number of users. The company’s Chief Technology Officer has the following requirements -Developers must launch the AWS infrastructure using AWS CloudFormation -Developers must not be able to create resources outside of CloudFormation -The solution must be able to scale to hundreds of accounts; Which of the following would meet these requirements? (Select TWO)
    - [ ] A. Using CloudFormation, create an IAM role that can be assumed by Cloud Formation that has permissions to Create all the resources the company needs. Use CloudFormation stack sets to deploy this template to each AWS Account.
    - [ ] B. In a central account, create an IAM role that can be assumed by developers and attach a policy that allows interaction with CloudFormation. Modify the Assume Policy Document action to follow the IAM to be passed to CloudFormation
    - [ ] C. Using CloudFormation, create an IAM role that can be assumed by Developers, and attach policies that allow interaction with and passing a role on CloudFormation. Attach an inline policy to deny access all other AWS services. Use CloudFormation Stack Sets to deploy this template to each AWS account.
    - [ ] D. Using CloudFormation, create an IAM role for each Developer, and attach policies that allow interaction with CloudFormation. Use Cloud CloudFormation Stack Sets to deploy this template to each AWS account.
    - [ ] E. In a central AWS account, create an IAM role that can be assumed by CloudFormation that has permissions to create the resources the company requires. Create a Cloud Formation stack policy that allows the IAM role to manage resources. Use CloudFormation Stack Sets to deploy the CloudFormation stack policy to each AWS account.

    <details>
       <summary>Answer</summary>

       第207题，答案AC。

    </details>

16. A retail company has a custom .NET web application running on AWS that uses Microsoft SQL Server for the database. The application servers maintain a user's session locally. Which combination of architecture changes are needed to ensure all tiers of the solution are highly available? (Choose three.)
    - [ ] A. Refactor the application to store the user's session in Amazon ElastiCache. Use Application Load Balancers to distribute the load between application instances.
    - [ ] B. Set up the database to generate hourly snapshots using Amazon EBS. Configure an Amazon CloudWatch Events rule to launch a new database instance if the primary one fails.
    - [ ] C. Migrate the database to Amazon RDS for SQL Server. Configure the RDS instance to use a multi-AZ deployment.
    - [ ] D. Move the .NET content to an Amazon S3 bucket. Configure the bucket for static website hosting.
    - [ ] E. Put the application instances in an Auto Scaling group. Configure the Auto Scaling group to create new instances if an instance becomes unhealthy.
    - [ ] F. Deploy Amazon CloudFront in front of the application tier. Configure CloudFront to serve content from healthy application instances only.

    <details>
       <summary>Answer</summary>

       第219题，答案ACE。

    </details>

17. During a security audit of a Service team's application. A Solutions Architect discovers that a username and password for an Amazon RDS database and a set of AWS IAM user credentials can be viewed in the AWS Lambda function code. The Lambda function uses the username and password to run queries on the database, and it uses the IAM credentials to call AWS services in a separate management account. The Solutions Architect concerned that the credentials could grant inappropriate access to anyone who can view the Lambda code. The management account and the Service team's account are in separate AWS Organizations organizational units (OUs). Which combination of changes should the Solutions Architect make to improve the solution's security? (Choose two.)
    - [ ] A. Configure Lambda to assume a role in the management account with appropriate access to AWS.
    - [ ] B. Configure Lambda to use the stored database credentials in AWS Secrets Manager and enable automatic rotation.
    - [ ] C. Create a Lambda function to rotate the credentials every hour by deploying a new Lambda version with the updated credentials.
    - [ ] D. Use an SCP on the management account's OU to prevent IAM users from accessing resources in the Service team's account.
    - [ ] E. Enable AWS Shield Advanced on the management account to shield sensitive resources from unauthorized IAM access.

    <details>
       <summary>Answer</summary>

       第223题，答案AB。

    </details>

18. A company is using an existing orchestration tool to manage thousands of Amazon EC2 instances. A recent penetration test found a vulnerability in the company's software stack. This vulnerability has prompted the company to perform a full evaluation of its current production environment. The analysis determined that the following vulnerabilities exist within the environment: -Operating systems with outdated libraries and known vulnerabilities are being used in production. -Relational databases hosted and managed by the company are running unsupported versions with known vulnerabilities. -Data stored in databases is not encrypted. The solutions architect intends to use AWS Config to continuously audit and assess the compliance of the company's AWS resource configurations with the company's policies and guidelines. What additional steps will enable the company to secure its environments and track resources while adhering to best practices?
    - [ ] A. Use AWS Application Discovery Service to evaluate all running EC2 instances. Use the AWS CLI to modify each instance and use EC2 user data to install the AWS Systems Manager Agent during boot. Schedule patching to run as a Systems Manager Maintenance Windows task. Migrate all relational databases to Amazon RDS and enable AWS KMS encryption.
    - [ ] B. Create an AWS CloudFormation template for the EC2 instances. Use EC2 user data in the CloudFormation template to install the AWS Systems Manager Agent and enable AWS KMS encryption on all Amazon EBS volumes. Have CloudFormation replace all running instances. Use Systems Manager Patch Manager to establish a patch baseline and deploy a Systems Manager Maintenance Windows task to execute AWS-RunPatchBaseline using the patch baseline.
    - [ ] C. Install the AWS Systems Manager Agent on all existing instances using the company's current orchestration tool. Use the Systems Manager Run Command to execute a list of commands to upgrade software on each instance using operating system-specific tools. Enable AWS KMS encryption on all Amazon EBS volumes.
    - [ ] D. Install the AWS Systems Manager Agent on all existing instances using the company's current orchestration tool. Migrate all relational databases to Amazon RDS and enable AWS KMS encryption. Use Systems Manager Patch Manager to establish a patch baseline and deploy a Systems Manager Maintenance Windows task to execute AWS-RunPatchBaseline using the patch baseline.

    <details>
       <summary>Answer</summary>

       第281题，答案D。

    </details>

19. A company has a VPC with two domain controllers running Active Directory in the default configuration. The VPC DHCP options set is configured to use the IP addresses of the two domain controllers. There is a VPC interface endpoint defined; but instances within the VPC are not able to resolve the private endpoint addresses. Which strategies would resolve this issue? (Choose two.)
    - [ ] A. Define an outbound Amazon Route 53 Resolver. Set a conditional forward rule for the Active Directory domain to the Active Directory servers. Update the VPC DHCP options set to AmazonProvidedDNS.
    - [ ] B. Update the DNS service on the Active Directory servers to forward all non-authoritative queries to the VPC Resolver.
    - [ ] C. Define an inbound Amazon Route 53 Resolver. Set a conditional forward rule for the Active Directory domain to the Active Directory servers. Update the VPC DHCP options set to AmazonProvidedDNS.
    - [ ] D. Update the DNS service on the client instances to split DNS queries between the Active Directory servers and the VPC Resolver.
    - [ ] E. Update the DNS service on the Active Directory servers to forward all queries to the VPC Resolver.

    <details>
       <summary>Answer</summary>

       第283题，答案AB。

    </details>

20. A company is deploying a public-facing global application on AWS using Amazon CloudFront. The application communicates with an external system. A solutions architect needs to ensure the data is secured during end-to-end transit and at rest. Which combination of steps will satisfy these requirements? (Choose three.)
    - [ ] A. Create a public certificate for the required domain in AWS Certificate Manager and deploy it to CloudFront, an Application Load Balancer, and Amazon EC2 instances.
    - [ ] B. Acquire a public certificate from a third-party vendor and deploy it to CloudFront, an Application Load Balancer, and Amazon EC2 instances.
    - [ ] C. Provision Amazon EBS encrypted volumes using AWS KMS and ensure explicit encryption of data when writing to Amazon EBS.
    - [ ] D. Provision Amazon EBS encrypted volumes using AWS KMS.
    - [ ] E. Use SSL or encrypt data while communicating with the external system using a VPN.
    - [ ] F. Communicate with the external system using plaintext and use the VPN to encrypt the data in transit.

    <details>
       <summary>Answer</summary>

       第283题，答案BDE。

    </details>
