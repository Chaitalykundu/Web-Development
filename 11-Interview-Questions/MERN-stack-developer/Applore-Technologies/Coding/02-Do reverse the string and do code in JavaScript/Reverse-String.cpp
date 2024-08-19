#include <bits/stdc++.h> 
string reverseString(string str)
{
	// Write your code here.

	int n = str.size();

	int temp;
	for(int i=0;i<n/2;i++){
		temp = str[i];
		str[i] = str[n-i-1];
		str[n-i-1] = temp;
	}
	return str;
}